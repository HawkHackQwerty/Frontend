// import React, { useState, useRef, useEffect } from "react";
// import { useReactMediaRecorder } from "react-media-recorder";

// const RecordView: React.FC = () => {
//   const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const {
//     status,
//     startRecording,
//     stopRecording,
//     mediaBlobUrl,
//     previewStream,
//   } = useReactMediaRecorder({ video: true });

//   useEffect(() => {
//     if (previewStream && videoRef.current) {
//       videoRef.current.srcObject = previewStream;
//     }
//   }, [previewStream]);

//   const handleGranted = (stream: MediaStream) => {
//     setMediaStream(stream);
//   };

//   return (
//     <div>
//       <p>{status}</p>
//       {/* Show live webcam feed */}
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         controls={false}
//         playsInline
//       />
//       <button onClick={startRecording}>Start Recording</button>
//       <button onClick={stopRecording}>Stop Recording</button>
//       {/* Show recorded video */}
//       {mediaBlobUrl && <video src={mediaBlobUrl} controls autoPlay loop />}
//     </div>
//   );
// };

// export default RecordView;

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
    onStop: async (blobUrl) => {
      setMediaBlobUrl(blobUrl); // Store mediaBlobUrl when recording stops
      await sendRecording(blobUrl); // Send recording when recording stops
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

  const sendRecording = async (blobUrl: string) => {
    try {
      {/* SEND THE VIDEO HERE */}
      const response = await axios.post("your-api-endpoint", {
        recording: blobUrl,
      });

      setFeedback(response.data.Video_feedback);

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
            top="55%"
            right="12vw"
            transform="translateY(-50%)"
          >
            <Text fontSize="xl" fontWeight="bold" mb="4">Your Feedback:</Text>
            <Text>{feedback}</Text>
          </Box>
        )}

    </div>
  );
};

export default RecordView;
