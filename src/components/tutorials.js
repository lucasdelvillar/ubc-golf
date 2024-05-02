import React, { useRef, useState } from 'react';
import VideoCard from './helper-components/VideoCard.js'; 
import tutorial1 from '../assets/tutorial1.mp4';
import tutorial2 from '../assets/tutorial2.mp4';
import tutorial3 from '../assets/tutorial3.mp4';
import tutorial4 from '../assets/tutorial4.mp4';
import tutorial5 from '../assets/tutorial5.mp4';
import t1_thumbnail from '../assets/l1-thumbnail.png';
import t2_thumbnail from '../assets/l2-thumbnail.png';
import t3_thumbnail from '../assets/l3-thumbnail.png';
import t4_thumbnail from '../assets/l4-thumbnail.png';
import t5_thumbnail from '../assets/l5-thumbnail.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Tutorials = () => {
  const carouselRef = useRef(null);
  const [progresses, setProgresses] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);

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

  const handlePlay = (index) => {
    setActiveVideo(index);
  };

  const videos = [
    { source: tutorial1, title: "The Basic Fundamentals of the Golf Set Up!", thumbnail: t1_thumbnail },
    { source: tutorial2, title: "How to Position your Golf Ball at Set Up!", thumbnail: t2_thumbnail  },
    { source: tutorial3, title: "How to Grip your Golf Club", thumbnail: t3_thumbnail  },
    { source: tutorial4, title: "How to Bomb your Drivers Right Down the Fairways", thumbnail: t4_thumbnail  },
    { source: tutorial5, title: "The Correct Impact Position When Hitting Irons", thumbnail: t5_thumbnail  }
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
                  source={video.source}
                  index={index}
                  onTimeUpdate={handleTimeUpdate}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  isPlaying={activeVideo === index}
                  onPlay={handlePlay}
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
