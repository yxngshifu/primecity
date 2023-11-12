import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logoImage from '../Assets/PFS2.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex justify-between items-center bg-opacity-90 h-24 max-w-[1240px] mx-auto px-4 text-[#023e8a]">
           <Link to="/">
            <img className="w-[30px] mx-4 my-4 flex items-center cursor-pointer" src={logoImage} alt="Logo" />
            </Link>
            <ul className="hidden md:flex cursor-pointer">
                
                <li className="p-4 hover:text-[#ffd60a]">
                    <Link to="/services">Services</Link>
                </li>
                <li className="p-4 hover:text-[#ffd60a]">
                    <Link to="/prices">Pricing</Link>
                </li>
                <li className="p-4 hover:text-[#ffd60a]">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div
                className={
                    nav
                        ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#f5ebe0] bg-opacity-10 ease-in-out duration-500'
                        : 'fixed left-[-100%]'
                }
            >
                <ul className="uppercase p-4 cursor-pointer">
                   
                    <li className="p-4 border-b border-gray-600 hover:text-[#ffd60a]">
                        <Link to="/services">Services</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 hover:text-[#ffd60a]">
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600 hover:text-[#ffd60a]">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
