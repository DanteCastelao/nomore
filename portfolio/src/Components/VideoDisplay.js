import React from "react";

const VideoDisplay = ({ videoSrc }) => {
  return (
    <div className="flex flex-col items-center rounded-3xl overflow-hidden">
      <video src={videoSrc} loop autoPlay className="w-full"></video>
    </div>
  );
};

export default VideoDisplay;
