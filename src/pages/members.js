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
                        Welcome to our Golf Club Members' Hub, where we celebrate the heart and soul of our community—the passionate individuals who have joined us on this golfing journey. Get to know the faces and stories behind the swings as we spotlight the diverse and talented members who make our golf club a vibrant and thriving community. From seasoned pros to those just teeing off, each member brings a unique flavor to our shared love for the game. Explore the profiles, anecdotes, and achievements of our members, and join us in celebrating the spirit of camaraderie that defines our golf club.
                    </p>
                </div>
            </header>
            <span className='members-review-title'>Member Reviews</span>
            <section className="member-section">
                <div className='member-sub-container'>
                    <div className="member">
                        <img src="" alt=""></img>
                        <p className="member-review">"Being part of this golf club has transformed my game. The camaraderie and support from fellow members are truly inspiring!"</p>
                </div>
                    <div className="member">
                        <img src="" alt=""></img>
                        <p className="member-review">"The golf club is not just about playing golf; it's about building friendships that last a lifetime. Proud to be a member!"</p>
                    </div>
                    <div className="member">
                        <img src="" alt=""></img>
                        <p className="member-review">"From beginners to pros, this club caters to all skill levels. It's the perfect place to share the joy of golf with like-minded enthusiasts."</p>
                    </div>
                </div>
                
            </section>
            <section className='all-members-container'> 
            
            </section>
            <Footer/>
        </div>
    );
};
 
export default Members;