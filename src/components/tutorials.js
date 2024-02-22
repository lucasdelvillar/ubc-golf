import logo from '../assets/tutorials_logo.png';
import image1 from '../assets/tutorials_image-1.jpg';
import greenBall from '../assets/tutorials_image-2.png'

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
            <span className='ml-title'>Discover Golf</span>
            <section className='tutorial-media-links'>   
                <div className='media-container'>
                    <img className='media-one' src={image1} alt='YouTube'></img>
                    <div className='media-sub-container'>
                        
                        <div className='media-paragraph-container'>
                            <p className='media-paragraph-right'>Dive into a world of golfing expertise with our tutorials available on YouTube and Instagram. On YouTube, our comprehensive video series provides in-depth insights into perfecting your swing, understanding course strategy, and enhancing your overall golfing skills. Immerse yourself in engaging and informative content tailored for golfers of all levels. Meanwhile, our Instagram tutorials deliver visually captivating snippets, offering quick and valuable tips to elevate your game. Whether you prefer the depth of YouTube or the visual appeal of Instagram, our tutorials cater to your golfing journey. Follow us on both platforms to stay updated, join a vibrant community, and turn every golfing moment into an opportunity for improvement and enjoyment!</p> 
                            <div className='bottom'>
                                <ul className='tutorial-list-container'>
                                    <li className="tutorial-list-item">
                                        <a className='tutorial-social-media-links' href='https://l.instagram.com/?u=https%3A%2F%2Fwww.youtube.com%2F%40iEddieTV&e=AT2RDCOyZy4osRU0NmU3jbI9Gn2X1XQjR7i69ph63InVgkrPX_g7SzYTw2AprWrBKn2UGH8zFrGxOYUvWxRadzRr7ua2JcjsM_d90w' target="_blank" rel="noreferrer">Watch on YouTube</a>
                                    </li>
                                    <li className="tutorial-list-item">
                                        <a className='tutorial-social-media-links' href='https://www.instagram.com/eddie_golf_/reels/' target="_blank" rel="noreferrer">Watch on Instagram</a>
                                    </li>
                            </ul>
                            <img className='green-golf-ball'src={greenBall} alt='green golf ball'></img>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};
 
export default Tutorials;