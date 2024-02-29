import React, { useState } from 'react';
import logo from '../assets/logo_black.png';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function NavBar(props) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    // useGSAP(() => {
    //     gsap.to(".nav-bar", {
    //         ease: "power1.out",
    //         y: 80, 
    //         duration: 1.5, 
    //         delay: 1}); 
    // })

    return (
        // is using GSAP need to add -top-20 to navbar
        <nav className="nav-bar bg-black fixed start-0 w-full z-20 border-b">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 my-3">
                {/* Logo */}
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Flowbite Logo"/>
                    {/* <span className="logo self-center text-2xl font-semibold whitespace-nowrap text-white">UBC Golf</span> */}
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* Sign Up Button */}
                    <button type="button" className="text-black bg-white hover:bg-gray-400 focus:ring-4 focus:outline-none focus:green-neon font-medium text-sm px-4 py-2 text-center">Sign Up</button>
                    {/* Collapsed Navigation Bar Button */}
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 " aria-controls="navbar-sticky" aria-expanded={isMenuOpen} onClick={toggleMenu}>
                        <span className="sr-only">Open navigation bar</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                {/* Expanded Navigation Bar Button */}
                <div className={`items-center justify-between w-full md:flex md:w-auto bg-black ${isMenuOpen ? '' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href={`#${props.aboutLink}`} className="block py-2 px-3 text-white md:underline underline-offset-4 md:decoration-green-neon bg-blue-900 rounded md:bg-transparent md:text-white md:p-0" aria-current="page">About</a>
                        </li>
                        <li> 
                            {/* mobile first approach, default styles are for small viewport, while adding custome styles for larger ones */}
                            <a href={`#${props.tutorialLink}`} className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:underline underline-offset-4 md:hover:decoration-green-neon md:hover:bg-transparent md:p-0">Tutorials</a>
                        </li>
                        <li>
                            <a href={`#${props.membersLink}`} className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:underline underline-offset-4 md:hover:decoration-green-neon md:hover:bg-transparent md:p-0">Members</a>
                        </li>
                        <li>
                            <a href={`#${props.eventsLink}`} className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:underline underline-offset-4 md:hover:decoration-green-neon md:hover:bg-transparent md:p-0">Events</a>
                        </li>
                        <li>
                            <a href={`#${props.contactFormLink}`} className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:underline underline-offset-4 md:hover:decoration-green-neon md:hover:bg-transparent md:p-0">Contact Form</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;