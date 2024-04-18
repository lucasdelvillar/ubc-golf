// VideoCard.jsx
import React, { useRef, useEffect } from 'react';

const VideoCard = ({ source, index, onTimeUpdate }) => {
  const videoRef = useRef();

  useEffect(() => {
    const handleTimeUpdate = () => onTimeUpdate(videoRef.current, index);

    const videoCurrent = videoRef.current;
    videoCurrent.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      videoCurrent.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [index, onTimeUpdate]);

  return (
    <div className="snap-center shrink-0 mx-2" style={{ scrollSnapAlign: 'start' }}>
      <div className="w-[264px] h-[415px] relative bg-gray-800 rounded-[32px] overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full absolute object-cover"
          controls
        >
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Include other overlay elements like progress bar and text here */}
      </div>
    </div>
  );
};

export default VideoCard;
