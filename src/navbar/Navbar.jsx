import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as MyIcon } from "../images/logo.svg";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const links = [
        { title: "About", link: "/about" },
        { title: "Services", link: "/services" },
        { title: "Portfolio", link: "/portfolio" },
        { title: "Blog", link: "/blog" },
        { title: "Contact", link: "/contact" },
    ];

    return (
        <nav className='relative flex px-8 py-2 items-center justify-between w-screen h-[70px] mt-1'>
            <NavLink to='/' className=''>
                <MyIcon />
            </NavLink>
            <button 
                className='block lg:hidden p-2'
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <IoMdClose className='w-[30px] h-[30px]' /> : <FiAlignJustify className='w-[40px] h-[40px]' /> }
            </button>
            <div className={`lg:flex gap-12 py-4 ${isOpen ? ' hidden' : 'hidden'} lg:block`}>
                <div>
                    {links.map((item) => (
                        <NavLink
                            to={item.link}
                            className={({ isActive }) =>
                                `px-2 py-1 font-semibold rounded transition-all duration-300 gap-5 border-b-2  ${
                                    isActive ? ' text-[#FF3E54] border-[#FF3E54] border-b-4' : ' text-[#0E1F51] border-transparent'
                                }`
                            }
                            key={item.title}
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </div>
                <div className='mr-10'>
                    <button className='bg-[#FF3E54] px-4 text-center rounded text-white text-sm font-light py-2'>
                        Get In Touch
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
               <div className={`fixed w-auto h-full inset-0  bg-[#ccc1c2] z-50 flex flex-col transition-transform duration-300 ${isOpen ? 'transform translate-x-10' : 'transform -translate-x-full'} md:hidden`}>
                <button 
                    className='absolute top-10 right-14  text-[#0E1F51] text-5xl '
                    onClick={() => setIsOpen(false)}
                >
                    <IoMdClose />
                </button>
                <div className='flex flex-col gap-8 w-full mt-28'>
                    {links.map((item) => (
                        <NavLink
                            to={item.link}
                            className={({ isActive }) =>
                                `text-3xl font-semibold transition-all duration-300 border-b border-[#FF3E54] text-center py-2  ${
                                    isActive ? 'text-[#FF3E54]' : 'text-[#0E1F51]'
                                }`
                            }
                            key={item.title}
                            onClick={() => setIsOpen(false)} // Close menu on link click
                        >
                            {item.title}
                        </NavLink>
                    ))}
                    <button className='bg-[#FF3E54] px-4 text-center rounded text-white text-lg font-light py-3 '>
                        Get In Touch
                    </button>
                </div>
            </div>
            )}
        </nav>
    );
}

export default Navbar;
