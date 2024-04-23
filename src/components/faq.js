import React, { useState } from 'react';

const Faq = () => {
    const [isFaqOpen1, setFaqOpen1] = useState(false);

    const toggleFaq1 = () => {
        setFaqOpen1(!isFaqOpen1);
    };

    const [isFaqOpen2, setFaqOpen2] = useState(false);

    const toggleFaq2 = () => {
        setFaqOpen2(!isFaqOpen2);
    };

    const [isFaqOpen3, setFaqOpen3] = useState(false);

    const toggleFaq3 = () => {
        setFaqOpen3(!isFaqOpen3);
    };

    return (
        <div></div>
    );
};
 
export default Faq;

//<section className='mb-16'>
        //     <h2 className='text-white text-5xl text-start font-bold uppercase tracking-wider px-5 mb-10'>
        //         faq
        //     </h2>
        //     <div className=''>
        //         <ul className='faq-question-container px-5'>
        //             <li className=''>
        //                 <p className='border-b-[1px]'>
        //                     <button className={`${isFaqOpen1 ? 'text-white' : 'text-gray-400'} font-bold text-start py-4`} onClick={toggleFaq1}>
        //                         How do I join and what's the cost?
        //                     </button>
        //                 </p>
                        
        //                 <div className={`${isFaqOpen1 ? '' : 'hidden'} text-white text-sm py-4 border-b-[1px]`}>
        //                     <p className='mb-4'>
        //                         It's $15 annually to join the UBC Golf Club. By clicking on the 'Sign Up' button at the top of the page you'll be re-directed to a seperate website. 
        //                     </p>
        //                     <p>
        //                         Add your payment information and enjoy the perks of being a part of the club!
        //                     </p>
        //                 </div>
        //             </li>
        //             <li>
        //                 <p className='border-b-[1px]'>
        //                     <button className={`${isFaqOpen2 ? 'text-white' : 'text-gray-400'} font-bold text-start py-4`} onClick={toggleFaq2}>
        //                         Does the club offer private golf lessons?
        //                     </button>
        //                 </p>
                        
        //                 <div className={`${isFaqOpen2 ? '' : 'hidden'} text-white text-sm py-4 border-b-[1px]`}>
        //                     <p className=''>
        //                         Yes, we do offer private golf lessons for members. Please inquire with one of the coaches to request a session at 'ubcgolfclub@gmail.com' or using the contact form below.
        //                     </p>
        //                 </div>
        //             </li>
        //             <li>
        //                 <p className='border-b-[1px]'>
        //                     <button className={`${isFaqOpen3 ? 'text-white' : 'text-gray-400'} font-bold text-start py-4`} onClick={toggleFaq3}>
        //                         Can I bring guest to club events?
        //                     </button>
        //                 </p>
        //                 <div className={`${isFaqOpen3 ? '' : 'hidden'} text-white text-sm py-4 border-b-[1px]`}>
        //                     <p className=''>
        //                         Guests that aren't registered for an event may not particiapte. We kindly request that each guest register to our events as space is limited. 
        //                     </p>
        //                 </div>
        //             </li>
        //         </ul>
        //     </div>
        // </section>