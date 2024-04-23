import tool from '../assets/4.png';
import friends from '../assets/friends-golf-landscape.jpeg';

const Events = () => {
    return (
        <>
        <section id='events' className='flex flex-col md:justify-center md:items-center w-[100%] px-5 mb-16 pt-[45px] md:pt-[90px]'> {/* mb-16 was removed*/}
                <div className='text-start md:text-end text-white pt-10 md:w-[80%]'>
                    <p className='text-start uppercase text-5xl font-bold text-white mb-10 pb-4 md:border-b-2 md:border-white'>
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
                    <a href='https://www.instagram.com/ubcgolfclub/' target="_blank">
                        <button type="button" className="h-10 w-50 text-black bg-white font-medium hover:bg-gray-400 focus:ring-4 focus:outline-none focus:green-neon text-sm rounded-full px-4 py-2 text-center"> {/*flex flex-row justify-center items-center*/}
                        Instagram
                        {/* <ArrowSVG />  */}
                        </button> 
                    </a> 
                </div>
            </section>
            <img className='md:hidden' src={friends} alt='friends'></img>
            <section id='calendar' className='flex flex-col md:justify-center md:items-center space-y-5 mb-16 mt-16 md:mb-16 px-5'>
                <div className='md:w-[80%] md:text-end'>
                    {/* <img className='relative top-[25px] right-[25px] md:right-[200px] mt-16 md:mt-0 md:ml-[150px] md:w-[50%] z-0' src={tool} alt='tool'></img> */}
                    <h2 className='relative text-white text-5xl font-bold uppercase tracking-wider mb-10 z-50'>Calendar</h2>
                    <p className='text-white mb-2'>
                        Subscribe to our Google Calendar to see the lastest clinics, events, and activities organized by our club.
                    </p>
                    <p className='text-white mb-2'>
                        There is limited availability to each event so hurry and sign up now! 
                    </p>
                    <a href='https://calendar.google.com/calendar/u/0?cid=MGZjZTljMDQwZGI3MWVjMzcwOWU4MjkzM2E2ODViOTNlMzFmZTAyOGY1MWVlOTM1YjdmYzMzMjliMzc5MzNlYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t' target="_blank" rel="noopener noreferrer" className='flex flex-col justify-center items-start md:items-end md:hidden'>
                        <button type="button" className="text-black text-end bg-white hover:bg-gray-400 focus:ring-4 focus:outline-none focus:green-neon font-medium rounded-full text-sm px-4 py-2 mt-10">Subscribe</button>   
                    </a>
                    <div className="hidden mt-10 md:block border-white">
                        <iframe 
                        src="https://embed.styledcalendar.com/#kWGli1kSaJCYzDk0RbpZ" 
                        title="Styled Calendar" 
                        class="h-[700px]" 
                        style={{width: '100%', border: 'none'}} 
                        data-cy="calendar-embed-iframe"></iframe>
                        <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
                    </div>
                </div>
            </section>
        </>
    );
};
 
export default Events;