import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import logo from '../assets/Michael-Jordan.png';

const Members = () => {
    return (
        <div>
            <NavBar />
            <svg className='squiggle' width="750" height="838" viewBox="0 0 774 838" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-62.6748 131.119C325.237 -99.9533 403.657 -21.5335 172.584 366.378C-58.4879 754.29 19.9318 832.71 407.844 601.638C795.756 370.565 874.175 448.985 643.103 836.897" stroke="#26FF02" stroke-width="2"/>
                </svg>
            <header className='member-header'>
                <div className='member-header-left'>
                    <img className="member-logo" src={logo} alt="Member Logo"></img>
                </div>
                <div className='member-header-right'>
                    <h1 className='member-hr-title'>Members</h1>
                    <p className='member-hr-intro'>
                        Welcome to our comprehensive golfing tutorials hub, where passion meets precision! Whether you're a novice looking to take your first swing or a seasoned golfer aiming to refine your technique, our curated collection of tutorials offers a wealth of knowledge to elevate your game. Dive into expert insights on perfecting your swing, mastering various shots, understanding course strategy, and fine-tuning your overall golfing prowess. Our user-friendly tutorials cater to golfers of all levels, providing step-by-step guidance, pro tips, and interactive resources to enhance every aspect of your golfing journey. Discover the keys to unlocking your full potential on the greens and transform your golfing experience into a fulfilling and enjoyable pursuit. Let the learning begin, and may your golf game reach new heights with our dedicated tutorials!
                    </p>
                </div>
            </header>
            <Footer/>
        </div>
    );
};
 
export default Members;