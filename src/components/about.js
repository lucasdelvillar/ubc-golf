import { useState, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import holdingBall from '../assets/2.png';
import logo from '../assets/ubc_gc_large.png';
import logoSmall from '../assets/3.png';
import michaelJordan from '../assets/Michael-Jordan.png';

const About = () => {
    useGSAP(() => {
        // gsap.fromTo(
        //     '.image',
        //     { scale: 0.5, opacity: 0 },
        //     { scale: 1, opacity: 1, duration: 2, ease: 'power2.out'}
        //   );
        //   gsap.fromTo(
        //     '.about-text',
        //     { scale: 0.5, opacity: 0 },
        //     { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }
        //   );  
    })

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
    return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // Empty dependency array to run the effect only once on mount

    return (
        <section id='about' className="flex flex-col justify-center px-2 relative mb-40">
            <div className='flex md:flex-row justify-center relative top-36 z-0'>
                <img className='image md:max-w-[40%] md:max-h-auto' src={isMobile ? logoSmall : logo} alt='hand holding tee and golf ball'></img>
                <img className='hidden md:inline-block md:max-w-[25%] md:max-h-auto mt-5' src={michaelJordan} alt='Michael Jordan'></img>
            </div>
            
            {isMobile ? (
                <>
                    <p className='about-text text-white text-start px-3 z-10 relative top-40 mb-4'>
                        Welcome to the UBC Golf Club!
                    </p>
                    <p className='about-text text-white text-start px-3 z-10 relative top-40'>
                        Our club provides an exciting and inclusive environment for UBC students to come together, share their love for the game, and enjoy the stunning landscapes around us.
                    </p>                 
                </>
            ) : null}
        </section>
    );
};
 
export default About;