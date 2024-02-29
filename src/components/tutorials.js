import logo from '../assets/tutorials_logo.png';
import image1 from '../assets/tutorials_image-1.jpg';
import greenBall from '../assets/tutorials_image-2.png'
import image2 from '../assets/1.png'
import image3 from '../assets/friends-golf.jpeg'
import image4 from '../assets/tutorials_image-1-sq.jpg'
import image5 from '../assets/friends-golf-sq.jpeg'

const Tutorials = () => {

    return (
        <div id='tutorials'>
            {/* Refactor this into a header component later on */}
            <div className='tutorial-header flex-col'>
                <div className='flex-col justify-start items-start space-y-10 text-start mb-16 px-5'>
                    {/* had relative in the h1 */}
                    <h2 className='text-white text-5xl text-start font-bold uppercase tracking-wider mb-16'>Tutorials</h2> 
                    {/*****  YOUTUBE TUTORIALS *****/}
                    <img className='m-auto border-b-2 border-green-neon' src={image4} alt="old timer golfing"></img>
                    <p className='text-white text-start'>
                        Dive into expert insights on perfecting your swing, mastering various clubs, and understanding course strategy on YouTube!  
                    </p>  
                    <a href='https://www.youtube.com/@iEddieTV' target="_blank" rel="noopener noreferrer">
                        <button type="button" className="text-black bg-white hover:bg-gray-400 focus:ring-4 focus:outline-none focus:green-neon font-medium text-sm px-4 py-2 mt-10">YouTube</button>   
                    </a>
                    
                    {/*****  INSTAGRAM TUTORIALS *****/}
                    <img className='m-auto border-b-2 border-green-neon' src={image5} alt="friends golfing"></img>
                    <p className="text-white ">
                        Our tutorials cater to golfers of all levels providing step-by-step guidance and pro tips to enhance your golfing journey on Instagram!
                    </p>
                    <a href='https://www.instagram.com/eddie_golf_/reels/' target="_blank" rel="noopener noreferrer">
                        <button type="button" className="text-black  bg-white hover:bg-gray-400 focus:ring-4 focus:outline-none focus:green-neon font-medium text-sm px-4 py-2 mt-10">Instagram</button>   
                    </a>
                    {/* <p className="text-white px-10 text-center">
                        Unlock your full potential on the greens and transform your golfing experience into a fulfilling and enjoyable pursuit. Let the learning begin!
                    </p> */}
                </div>
                {/* <div className='hidden md:inline-block'>
                    <img className="tutorial-logo" src={image2} alt="Tutorial Logo"></img>
                </div> */}
            </div>
            {/* <span className='ml-title sm:hidden'>Discover Golf</span> */}
            {/* <section className='tutorial-media-links sm:hidden'>   
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
        </div>
    );
};
 
export default Tutorials;