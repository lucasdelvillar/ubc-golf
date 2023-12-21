import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import logo from '../assets/glove-and-ball-br.png';

const Events = () => {
    return (
        <div>
            <NavBar />
            <header className='event-header'>
                <div className='event-header-left'>
                    <img className="event-logo" src={logo} alt="Event Logo"></img>
                </div>
                <div className='header-right'>
                    <h1 className='hr-title'>Events</h1>
                    <p className='hr-intro'>
                        Our Golf Events Hub is your go-to destination for all things golf-related. Whether you're a seasoned golfer or just starting to explore the greens, this page is your gateway to a vibrant community of golf enthusiasts. Discover a calendar filled with exciting golf events, tournaments, and activities organized by our university club. From friendly matches to competitive tournaments, we cater to golfers of all skill levels. Join us in fostering a passion for the sport, connecting with fellow golfers, and creating memorable experiences on the fairways!
                    </p>
                </div>
            </header>
            <span className='ml-title'>Upcoming Events</span>
            <div className="calendar-container">
                <iframe 
                src="https://embed.styledcalendar.com/#kWGli1kSaJCYzDk0RbpZ" 
                title="Styled Calendar" 
                class="styled-calendar-container" 
                style={{width: '100%', border: 'none'}} 
                data-cy="calendar-embed-iframe"></iframe>
                <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
            </div>
            
            <Footer/>
        </div>
    );
};
 
export default Events;