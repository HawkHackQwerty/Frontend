import React, { useState, useRef, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { ChakraProvider, Box, Text, Button } from "@chakra-ui/react";
import axios from "axios"; // Import Axios
import "./RecordView.css";

const RecordView: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRecording, setIsRecording] = useState(false); // State for recording indicator
  const [mediaBlobUrl, setMediaBlobUrl] = useState<string | null>(null); // State to store mediaBlobUrl
  const [feedback, setFeedback] = useState<string>("");

  const {
    status,
    startRecording,
    stopRecording,
    previewStream,
  } = useReactMediaRecorder({
    video: true,
    onStop: async (blobUrl, blob) => {
      setMediaBlobUrl(blobUrl); // Store mediaBlobUrl when recording stops
      await sendRecording(blob); // Send recording when recording stops
    },
  });

  useEffect(() => {
    if (previewStream && videoRef.current) {
      videoRef.current.srcObject = previewStream;
    }
  }, [previewStream]);

  useEffect(() => {
    setIsRecording(status === "recording"); // Update recording indicator state
  }, [status]);

  const sendRecording = async (blob: Blob) => {
    try {
      const formData = new FormData();
      formData.append("file", blob, "recording.webm");

      const response = await axios.post("http://127.0.0.1:5000/video", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFeedback(response.data.feedback);

      console.log("Recording sent:", response.data);
    } catch (error) {
      console.error("Error sending recording:", error);
    }
  };

  const handleStopRecording = () => {
    stopRecording(); // Stop recording
  };

  useEffect(() => {
    if (videoRef.current && mediaBlobUrl) {
      videoRef.current.srcObject = null; // Clear the preview stream
      videoRef.current.src = mediaBlobUrl; // Set the recorded video URL
    }
  }, [mediaBlobUrl]);

  return (
    <div className="container">
      <div className="header">
        <h2>Interview Prep</h2>
        <h1>Tell me about yourself!</h1>
      </div>
      <div className="video-container">
        <video
          ref={videoRef}
          autoPlay
          muted={isRecording}
          controls={!isRecording}
          className="live-video"
        />
        {/* Recording indicator */}
        {isRecording && <div className="recording-indicator" />}
      </div>
      <div className="button-container">
        <button onClick={startRecording} className="record-button">Start Recording</button>
        <button onClick={handleStopRecording} className="stop-button">Stop Recording</button>
      </div>

      {feedback && (
        <Box
          width="500px"
          height="700px"
          backgroundColor="white"
          border="1px solid gray"
          boxShadow="md"
          borderRadius="md"
          p="4"
          position="absolute"
          top="22%"
          right="12vw"
        >
          <Text fontSize="xl" fontWeight="bold" mb="4">Your Feedback:</Text>
          <Text>{feedback}</Text>
        </Box>
      )}
    </div>
  );
};

export default RecordView;
