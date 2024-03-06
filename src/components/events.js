const Events = () => {
    return (
        <section id='events' className='events flex flex-col md:justify-center md:items-center space-y-5 mb-16 px-5'>
            <div className='md:w-[80%] md:text-end'>
                <h2 className='text-white text-5xl font-bold uppercase tracking-wider mb-10'>Calendar</h2>
                <p className='text-white mb-2'>
                    Check out and subscribe to our calendar to see the lastest clinics, events, and activities organized by our club.
                </p>
                <p className='text-white mb-2'>
                    There is limited availability to each event so hurry up and sign up now! 
                </p>
                <a href='https://calendar.google.com/calendar/u/0?cid=MGZjZTljMDQwZGI3MWVjMzcwOWU4MjkzM2E2ODViOTNlMzFmZTAyOGY1MWVlOTM1YjdmYzMzMjliMzc5MzNlYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t' target="_blank" rel="noopener noreferrer" className='flex flex-col justify-center items-start md:items-end md:hidden'>
                        <button type="button" className="text-black text-end bg-white hover:bg-gray-400 focus:ring-4 focus:outline-none focus:green-neon font-medium rounded-full text-sm px-4 py-2 mt-10">Google Calendar</button>   
                </a>
                <div className="hidden mt-10 md:block">
                    <iframe 
                    src="https://embed.styledcalendar.com/#kWGli1kSaJCYzDk0RbpZ" 
                    title="Styled Calendar" 
                    class="h-[700px]" 
                    style={{width: '100%', border: 'none'}} 
                    data-cy="calendar-embed-iframe"></iframe>
                    <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
                </div>
            </div>
            {/* Will need to make a button that links to google calender on mobile */}
        </section>
    );
};
 
export default Events;