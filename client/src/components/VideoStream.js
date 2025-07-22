import React, { useEffect, useRef } from 'react';

export default function VideoStream({ socket, roomId }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const constraints = { video: true, audio: true };

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });

    // Qui potresti aggiungere WebRTC o altre logiche future

    return () => {
      const tracks = videoRef.current?.srcObject?.getTracks();
      tracks?.forEach((track) => track.stop());
    };
  }, []);

  return (
    <div className="video-stream">
      <video ref={videoRef} autoPlay muted playsInline width="300" />
    </div>
  );
}
