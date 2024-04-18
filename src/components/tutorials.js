// Tutorials.jsx
import React, { useRef, useState } from 'react';
import VideoCard from './helper-components/VideoCard.js'; // Adjust the import path as neede
import tutorial1 from '../assets/tutorial1.mp4'; // Adjust path as necessary
import tutorial2 from '../assets/tutorial2.mp4';
import tutorial3 from '../assets/tutorial3.mp4';


const Tutorials = () => {
  const carouselRef = useRef(null);
  const [progresses, setProgresses] = useState([]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleTimeUpdate = (video, index) => {
    const progress = (video.currentTime / video.duration) * 100;
    setProgresses(prevProgresses => {
      const newProgresses = [...prevProgresses];
      newProgresses[index] = progress;
      return newProgresses;
    });
  };

  const videoSources = [tutorial1, tutorial2, tutorial3, tutorial3, tutorial3];

  return (
    <section className="bg-black py-10" id="tutorials">
      <div className="container mx-auto text-center">
        <h2 className="text-white text-5xl font-bold uppercase mb-10">Improve Your Game</h2>
        <div className="flex justify-center items-center gap-4">
        <button onClick={scrollLeft} className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center">
            &#8592;
          </button>
          <div className="flex overflow-hidden" ref={carouselRef}>
            <div className="flex snap-x snap-mandatory gap-4" style={{ scrollSnapType: 'x mandatory' }}>
              {videoSources.map((source, index) => (
                <VideoCard
                  key={index}
                  source={source}
                  index={index}
                  onTimeUpdate={handleTimeUpdate}
                />
              ))}
            </div>
          </div>
          <button onClick={scrollRight} className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center">
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
