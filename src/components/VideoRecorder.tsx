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
import "./RecordView.css";

const RecordView: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRecording, setIsRecording] = useState(false); // State for recording indicator
  const [mediaBlobUrl, setMediaBlobUrl] = useState<string | null>(null); // State to store mediaBlobUrl

  const {
    status,
    startRecording,
    stopRecording,
    previewStream,
  } = useReactMediaRecorder({
    video: true,
    onStop: (blobUrl) => {
      setMediaBlobUrl(blobUrl); // Store mediaBlobUrl when recording stops
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

  const downloadRecording = async () => {
    if (mediaBlobUrl) {
      const mediaBlob = await fetch(mediaBlobUrl)
        .then(response => response.blob());

      const myFile = new File(
        [mediaBlob],
        "recorded_video.webm",
        { type: 'video/webm' }
      );

      const url = URL.createObjectURL(myFile); // Create a download URL
      const a = document.createElement("a");
      a.href = url;
      a.download = "recorded_video.webm"; // Set the filename
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url); // Release the object URL
      document.body.removeChild(a); // Remove the temporary anchor element
      return myFile;
    } else {
      console.log("error");
    }
  };

  const handleStopRecording = () => {
    stopRecording(); // Stop recording
    downloadRecording(); // Download the recording
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
        {/* Show live webcam feed or recorded video */}
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
    </div>
  );
};

export default RecordView;


