import TestimonialCard from './helper-components/TestimonalCard';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.jpg';
import profile5 from '../assets/profile5.jpg';
import profile6 from '../assets/profile6.jpg';
import golf from '../assets/golf.png'

const Members = () => {
    return (
        <>
            <div id='members' className="min-w-screen min-h-screen flex items-center justify-center py-5">
                <div className="w-full bg-black px-5 py-10 text-white">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="uppercase text-5xl md:text-5xl font-bold mb-5 text-white">What members are saying.</h1>
                            {/* <img src={golf} alt=''></img> */}
                            <h3 className="text-xl mb-5 font-light">Read what our memebers have to say about our club!</h3>
                            <div className="text-center mb-10">
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex items-start">
                            <div className="px-3 md:w-1/3">
                                <TestimonialCard
                                    profileImg={profile1} // Assuming profile1 is the image URL
                                    name="Hana Park"
                                    title="One of the friendliest clubs I've joined!"
                                    quote={`"Joining the UBC Golf Club has been such a great decision. It's one of the friendliest clubs I've ever been a part of."`}
                                />
                                <TestimonialCard
                                    profileImg={profile2} // Assuming profile1 is the image URL
                                    name="Calvin Chan"
                                    title="Best place to practice my swing ⛳️🏌️‍♂️"
                                    quote={`"Rather than paying hundreds of dollars for a golf coach, I'm able to go to their clinics and learn everything I need to know."`}     
                                />
                            </div>
                            <div className="px-3 md:w-1/3">
                                <TestimonialCard
                                    profileImg={profile4} // Assuming profile1 is the image URL
                                    name="Tomie Ewart"
                                    title="The golf coaches are top notch 👌"
                                    quote={`"The golf coaches are more than qualified to improve your golf skills. The coaches give personalized tips and because of this I've gotten so much better in a short amount of time."`}
                                />
                                <TestimonialCard
                                    profileImg={profile3} // Assuming profile1 is the image URL
                                    name="Sebastian Hayes"
                                    title="I wish I joined this club sooner!"
                                    quote={`"Being a member of the club feels like having a second family. Both the members and executives have made me feel welcome on top of getting much better at golf!"`}
                                />
                            </div>
                            <div className="px-3 md:w-1/3">
                                <TestimonialCard
                                    profileImg={profile5} // Assuming profile1 is the image URL
                                    name="Samantha Lee"
                                    title="Easy to make new friends"
                                    quote={`"Aside from their clinics they also have socials that run afterwards where you get to mingle with everyone!"`}
                                />
                                <TestimonialCard
                                    profileImg={profile6} // Assuming profile1 is the image URL
                                    name="Alexander Hemple"
                                    title="Can't get enough of their clinics 🙌"
                                    quote={`"I was actually shocked how fast I was able to improve. Going from no experience to being able to hit the ball straight on my first day felt so satisfying."`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Members;

// const Members = () => {
//     return (
//         // Justify-center and items-center don't do anything right now. Text-center is alinging the content i.e. text
//         <section id='members' className='flex flex-col justify-center text-start px-5 mb-16 md:text-center md:items-center'>
//             <h2 className='text-white text-5xl text-start font-bold uppercase tracking-wider mb-5 '>Members</h2> 
//             <p className='text-white md:w-[500px] mb-2'>
//                 Read what our members have to say, as we spotlight the diverse and talented group of people who make our golf club a vibrant and thriving community. 
//             </p>
//             <p className='text-white md:w-[500px] mb-16'>
//                 Each member brings a unique flavor to our shared love for the game. 
//             </p>
//             <div className='flex flex-col space-y-5 md:flex-row justify-center md:space-x-5 md:w-[80%] md:-space-y-0'> 
//                 <TestimonialCard
//                     className=''
//                     testimonial="One of the friendliest clubs I've joined!"
//                     description={"\"Joining the UBC Golf Club has been a delight, it's one of the friendliest clubs I've ever been a part of.\""}
//                     profilePicture={profile1}
//                     name="Hana Park"
//                     title="3rd Year Chemistry Major"
//                 />
//                 <TestimonialCard
//                     className=''
//                     testimonial="Home away from home"
//                     description={"\"Being a member of the club feels like having a second family. Both the members and executives have made me feel so welcome.\""}
//                     profilePicture={profile2}
//                     name="Calvin Chan"
//                     title="2nd Year English Major"
//                 />
//                 <TestimonialCard
//                     className=''
//                     testimonial="Unforgettable Moments, Lifelong Friends"
//                     description={"\"Joining this club was one of the best decisions I've ever made!\""}
//                     profilePicture={profile3}
//                     name="Sebastian Hayes"
//                     title="2nd Year Business Major"
//                 />
//             </div>      
//         </section>
//     );
// };
 
// export default Members;