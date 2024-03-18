import logo from '../assets/tutorials_logo.png';
import image1 from '../assets/tutorials_image-1.jpg';
import greenBall from '../assets/tutorials_image-2.png'
import image2 from '../assets/1.png'
import image3 from '../assets/friends-golf.jpeg'
import image4 from '../assets/tutorials_image-1-sq.jpg'
import image5 from '../assets/friends-golf-sq.jpeg'

const Tutorials = () => {

    return (
        <section id='tutorials' className=''>
            <div className='text-start md:text-end text-white pt-10 md:w-[80%] mx-auto'>
                <p className='text-center uppercase text-5xl font-bold text-white mb-10 pb-4 md:border-b-2 md:border-white'>
                    Tutorials
                </p>
            </div>
        </section>
    );
};
 
export default Tutorials;

{/* <section className='tutorial-media-links'>
                <span className='ml-title'>Discover Golf</span>   
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
            </section> */}