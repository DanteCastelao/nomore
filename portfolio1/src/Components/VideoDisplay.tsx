import React from "react";

interface Props {
  videoSrc: string;
}

const VideoDisplay: React.FC<Props> = ({ videoSrc }) => {
  return (
    <div className="flex flex-col items-center rounded-3xl overflow-hidden">
      <video src={videoSrc} loop muted autoPlay className="w-full"></video>
    </div>
  );
};

export default VideoDisplay;
