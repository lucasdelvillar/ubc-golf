import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import holdingBall from '../assets/2.png';

const About = () => {
    useGSAP(() => {
        gsap.fromTo(
            '.image',
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 2, ease: 'power2.out'}
          );
        //   gsap.fromTo(
        //     '.about-text',
        //     { scale: 0.5, opacity: 0 },
        //     { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }
        //   );  
    })

    return (
        <section className="about flex-col justify-center items-center relative mb-16">
            <img className="image md:w-2/5 h-auto relative top-10 z-0" src={holdingBall} alt='hand holding tee and golf ball'></img>
            <p className='about-text text-white text-center px-11 z-10 relative top-1'>
                Welcome to the UBC Golf Club! Our club provides an exciting and inclusive environment for UBC students to come together, share their love for the game, and enjoy the stunning landscapes around us.
            </p>
        </section>
    );
};
 
export default About;