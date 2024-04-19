import React, { useRef, useState } from 'react';
import VideoCard from './helper-components/VideoCard.js'; 
import tutorial1 from '../assets/tutorial1.mp4';
import tutorial2 from '../assets/tutorial2.mp4';
import tutorial3 from '../assets/tutorial3.mp4';
import tutorial4 from '../assets/tutorial4.mp4';
import tutorial5 from '../assets/tutorial5.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Tutorials = () => {
  const carouselRef = useRef(null);
  const [progresses, setProgresses] = useState([]);

  const scrollAmount = 280;

 
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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

  const videos = [
    { source: tutorial1, title: "The basic fundamentals of the golf set up!" },
    { source: tutorial2, title: "How to position your golf ball at set up!" },
    { source: tutorial3, title: "How to grip your golf club" },
    { source: tutorial4, title: "How to bomb your drivers right down the fairways" },
    { source: tutorial5, title: "The correct impact position when hitting irons" }
  ];

  return (
    <section className="bg-black py-10" id="tutorials">
      <div className="container mx-auto text-center">
        <h2 className="text-white text-5xl font-bold uppercase mb-10">Improve Your Game</h2>
        <div className="flex justify-center items-center gap-4">
          <button onClick={scrollLeft} className="w-8 h-8 bg-green-neon text-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div className="flex overflow-hidden" ref={carouselRef} style={{ width: '1200px' }}>
            <div className="flex snap-x snap-mandatory gap-4" style={{ scrollSnapType: 'x mandatory' }}>
              {videos.map((video, index) => (
                <VideoCard
                  key={index}
                  source={video.source}
                  index={index}
                  onTimeUpdate={handleTimeUpdate}
                  title={video.title}
                />
              ))}
            </div>
          </div>
          <button onClick={scrollRight} className="w-8 h-8 bg-green-neon text-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
};


export default Tutorials;
