import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const VideoCard = ({ source, title }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(currentProgress);
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleClickOnProgressBar = (event) => {
    const progressBar = event.target;
    const bounds = progressBar.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const newTime = (x / progressBar.offsetWidth) * duration;
    videoRef.current.currentTime = newTime;
    setProgress((newTime / duration) * 100);
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className="snap-center shrink-0 mx-2 relative group" style={{ scrollSnapAlign: 'start' }}>
      <div className="w-[264px] h-[415px] relative bg-gray-800 rounded-[32px] overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full absolute object-cover"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onClick={togglePlay}
        >
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-20 h-20 flex justify-center items-center bg-green-neon bg-opacity-80 rounded-3xl">
            <button onClick={togglePlay} className="text-white focus:outline-none">
              {isPlaying ? <FontAwesomeIcon icon={faPause} className="h-8 w-8" /> : <FontAwesomeIcon icon={faPlay} className="h-8 w-8" />}
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center px-4 visibility-hidden group-hover:visibility-visible transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <div className="w-56 text-white text-2xl mb-2 self-start text-left" style={{ fontSize: '24px' }}>{title}</div> {/* Styled title, now left aligned */}
          <div className="flex items-center w-full">
            <div
              className="relative w-full h-1 bg-gray-500 rounded mr-2"
              onClick={handleClickOnProgressBar}
            >
              <div className="absolute top-0 left-0 h-1 bg-green-neon rounded" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="text-white text-sm">{formatTime(duration - currentTime)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
