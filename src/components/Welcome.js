import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ArrowSVG from './helper-components/ArrowSVG';
import glove from '../assets/glove-and-ball-br.png';
import friends from '../assets/tutorials_image-1.jpg';

const Welcome = () => {
    useGSAP(() => {
        gsap.fromTo(
            '.image',
            { scale: 0.5, opacity: 0 },
            { delay: 0.5, scale: 1, opacity: 1, duration: 2.5, ease: 'power2.out'}
          );
          gsap.fromTo(
            '.about-text',
            { scale: 0.5, opacity: 0 },
            { delay: 0.5, scale: 1, opacity: 1, duration: 2.5, ease: 'power2.out' }
          );  
    })

    return (
        <>
            <section id='about' className="flex flex-col justify-center items-center mt-10 mb-32 px-2 md:flex-row md:mt-32">
                <img className='image -rotate-45 mb-5 w-[400px] md:w-1/2' src={glove} alt='glove and ball'></img>
                <div className='flex flex-col justify-center items-center z-10'>
                    <p className='about-text uppercase text-white text-5xl font-bold text-start px-3 mb-5'>
                        More than a game
                    </p>
                    <p className='about-text max-w-[500px] text-white text-start px-5 z-10 mb-10 '>
                        Our club provides an exciting and inclusive environment for UBC students to come together, share their love for the golf, and enjoy more than just the game.
                    </p>
                    {/******* SIGN UP BUTTON ******/}
                    <button type="button" className="about-text h-16 w-80 text-black bg-white font-medium hover:bg-gray-400 focus:ring-4 focus:outline-none focus:green-neon text-2xl rounded-full px-4 py-2 text-center flex flex-row justify-center items-center"> 
                        Sign Up 
                    <ArrowSVG /> 
                    </button> 
                </div>
            </section>
            <section className='flex flex-col mb-10 md:flex-row md:mb-28'>
                <div className='flex flex-col absolute md:static text-start text-white px-5 pt-10 z-10 mx-auto'>
                    <p className='uppercase text-5xl font-bold text-start mb-5'>
                        Welcome
                    </p>
                    <p className='text-white text-sm mb-5 md:text-base'>
                        To one of the best clubs UBC has to offer. 
                    </p>
                    <p className='text-white text-sm md:w-[500px] mb-5 md:text-base'>
                        Our club is more than just a place to play golf—it's a community of like-minded individuals united by a shared love for the game.
                    </p>
                    <p className='hidden text-white text-sm md:block md:w-[500px] mb-5 md:text-base'> 
                        Whether you're a seasoned pro or a newcomer to the sport, our club has an exciting and inclusive environment for UBC students to come together, swing their clubs, and enjoy the stunning landscapes that surround us. 
                    </p>
                    {/* <img className='hidden relative top-[200px] w-[400px] opacity-75 md:block' src={shoes} alt='shoes'></img> */}
                </div>
                <img className='md:w-[500px] md:pt-10 m-auto opacity-75 border-green-neon border-b-2' src={friends} alt='friends'></img>
            </section>
            <section className='flex flex-col md:justify-center md:items-center w-[100%] mb-16 px-5'>
                <div className='text-start md:text-end text-white pt-10 md:w-[80%]'>
                    <p className='text-start uppercase text-5xl font-bold text-white mb-10 pb-4 border-b-2 border-white'>
                        Clinics & Events
                    </p>
                    <div className=''>
                        <p className='text-white mb-2'>
                            Discover the joy of golf through the UBC Golf Club's engaging and instructive clinics. 
                        </p>
                        <p className='text-white mb-2'>
                            Our clinics are thoughtfully designed group sessions aimed at introducing participants to the fundamentals of golf or enhancing their existing skills. 
                        </p>
                        <p className='hidden text-white mb-2 md:block'>
                            Led by experienced instructors, these sessions provide a dynamic and supportive environment for individuals of all skill levels.
                        </p>
                        <p className='text-white mb-10 md:block'>
                            Follow us on Instagram to learn more and get the latest news on our next clinic!
                        </p>
                    </div>
                    <button type="button" className="h-10 w-50 text-black bg-white font-medium hover:bg-gray-400 focus:ring-4 focus:outline-none focus:green-neon text-sm rounded-full px-4 py-2 text-center"> {/*flex flex-row justify-center items-center*/}
                        Learn More
                    {/* <ArrowSVG />  */}
                    </button> 
                </div>
            </section>
        </> 
    );
};
 
export default Welcome;