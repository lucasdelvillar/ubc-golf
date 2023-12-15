import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import logo from '../assets/tutorials_logo.png'

const Tutorials = () => {
    return (
        <div>
            <NavBar />
            {/* Refactor this into a header component later on */}
            <header className='tutorial-header'>
                <div className='header-left'>
                    <img className="tutorial-logo" src={logo} alt="Tutorial Logo"></img>
                </div>
                <div className='header-right'>
                    <h1 className='hr-title'>Tutorials</h1>
                    <p className='hr-intro'>
                        Welcome to our comprehensive golfing tutorials hub, where passion meets precision! Whether you're a novice looking to take your first swing or a seasoned golfer aiming to refine your technique, our curated collection of tutorials offers a wealth of knowledge to elevate your game. Dive into expert insights on perfecting your swing, mastering various shots, understanding course strategy, and fine-tuning your overall golfing prowess. Our user-friendly tutorials cater to golfers of all levels, providing step-by-step guidance, pro tips, and interactive resources to enhance every aspect of your golfing journey. Discover the keys to unlocking your full potential on the greens and transform your golfing experience into a fulfilling and enjoyable pursuit. Let the learning begin, and may your golf game reach new heights with our dedicated tutorials!
                    </p>
                </div>
            </header>
            {/* <hr></hr> */}
            <section className='tutorial-media-links'>   
                <span className='ml-title'>Want to learn to golf?</span>
                <div>
                    <img className='media-one' alt='YouTube'></img>
                    <img className='media-two' alt='Instagram'></img>
                    <img className='media-three' alt='Tiktok'></img>
                </div>
                
            </section>

            <Footer/>
        </div>
    );
};
 
export default Tutorials;