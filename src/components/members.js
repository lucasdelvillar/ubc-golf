import TestimonialCard from './helper-components/TestimonalCard';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';

const Members = () => {
    return (
        // Justify-center and items-center don't do anything right now. Text-center is alinging the content i.e. text
        <section id='members' className='flex flex-col justify-center space-y-5 text-start px-5 mb-16'>
            <h2 className='text-white text-5xl text-start font-bold uppercase tracking-wider mb-5'>Members</h2> 
            {/* <img className="w-4/5 m-auto rounded-lg border-b-2 border-green-neon" src={logo} alt="Member Logo"></img> */}
            <p className='text-white'>
                Read what our members have to say, as we spotlight the diverse and talented group of people who make our golf club a vibrant and thriving community. 
            </p>
            <p className='text-white'>
                From seasoned pros to those just teeing off, each member brings a unique flavor to our shared love for the game. 
            </p>
            <TestimonialCard
                testimonial="One of the friendliest clubs I've joined!"
                description={"\"Joining the UBC Golf Club has been a delight, it's one of the friendliest clubs I've ever been a part of.\""}
                profilePicture={profile1}
                name="Hana Park"
                title="3rd Year Chemistry Major"
            />
            <TestimonialCard
                testimonial="Home away from home"
                description={"\"Being a member of the club feels like having a second family. Both the members and executives have made me feel so welcome.\""}
                profilePicture={profile2}
                name="Calvin Chan"
                title="2nd Year English Major"
            />
            <TestimonialCard
                testimonial="Unforgettable Moments, Lifelong Friends"
                description={"\"Joining this club was one of the best decisions I've ever made!\""}
                profilePicture={profile3}
                name="Sebastian Hayes"
                title="2nd Year Business Major"
            />
        </section>




        // <div>
        //     <svg className='squiggle' width="750" height="838" viewBox="0 0 774 838" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <path d="M-62.6748 131.119C325.237 -99.9533 403.657 -21.5335 172.584 366.378C-58.4879 754.29 19.9318 832.71 407.844 601.638C795.756 370.565 874.175 448.985 643.103 836.897" stroke="#26FF02" stroke-width="2"/>
        //         </svg>
        //     <div className='member-header flex-col justify-center items-center'>
        //         <h2 className='hr-title text-black text-5xl font-bold tracking-wider uppercase mb-16'>Members</h2> 
                
        //         <div className='member-header-left'>
        //             <img className="member-logo" src={logo} alt="Member Logo"></img>
        //         </div>
        //         <div className='member-header-right'>
        //             <h1 className='member-hr-title'>Members</h1>
        //             <p className='member-hr-intro'>
        //                 Welcome to our Golf Club Members' Hub, where we celebrate the heart and soul of our community—the passionate individuals who have joined us on this golfing journey. Get to know the faces and stories behind the swings as we spotlight the diverse and talented members who make our golf club a vibrant and thriving community. From seasoned pros to those just teeing off, each member brings a unique flavor to our shared love for the game. Explore the profiles, anecdotes, and achievements of our members, and join us in celebrating the spirit of camaraderie that defines our golf club.
        //             </p>
        //         </div>
        //     </div>
        //     <span className='members-review-title'>Member Reviews</span>
        //     <section className="member-section">
        //         <div className='member-sub-container'>
        //             <div className="member">
        //                 <img src="" alt=""></img>
        //                 <p className="member-review">"Being part of this golf club has transformed my game. The camaraderie and support from fellow members are truly inspiring!"</p>
        //         </div>
        //             <div className="member">
        //                 <img src="" alt=""></img>
        //                 <p className="member-review">"The golf club is not just about playing golf; it's about building friendships that last a lifetime. Proud to be a member!"</p>
        //             </div>
        //             <div className="member">
        //                 <img src="" alt=""></img>
        //                 <p className="member-review">"From beginners to pros, this club caters to all skill levels. It's the perfect place to share the joy of golf with like-minded enthusiasts."</p>
        //             </div>
        //         </div>
                
        //     </section>
        //     <section className='all-members-container'> 
            
        //     </section>
        // </div>
    );
};
 
export default Members;