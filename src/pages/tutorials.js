import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import logo from '../assets/tutorials_logo.png';
import image1 from '../assets/tutorials_image-1.jpg';

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
            <span className='ml-title'>Want to learn to golf?</span>
            <section className='tutorial-media-links'>   
                <div className='media-container'>
                    <div className='media-sub-container'>
                        <img className='media-one' src={image1} alt='YouTube'></img>
                        <p className='media-paragraph-right'>Explore our extensive collection of golfing tutorials on our YouTube channel, where a world of expertise and insights awaits. Immerse yourself in engaging and informative videos designed to elevate your golfing skills. From mastering the perfect swing to unraveling the nuances of course strategy, our YouTube tutorials cater to golfers of all levels. Whether you're a beginner taking your first steps on the green or a seasoned player aiming for precision, our curated content offers a valuable resource for honing your technique and enhancing your overall golfing experience. Join us on YouTube and embark on a journey of improvement and enjoyment in the realm of golf.</p>
                            
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};
 
export default Tutorials;