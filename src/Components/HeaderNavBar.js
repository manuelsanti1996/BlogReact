import React, { useState } from 'react'

const HeaderNavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex justify-between items-center p-4 border-b-4 border-stone-900'>
            <div className='flex items-center'>
                <a href='#'>
                    <img src='logo.jpeg' alt='Logo' style={{ height: '40px', width: '40px' }} />
                </a>
                <p>Blog</p>
            </div>
            <div>
                <button className="bg-gray-400 p-2 rounded-md" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <rect x="2" y="4" width="20" height="2" rx="1" />
                        <rect x="2" y="11" width="20" height="2" rx="1" />
                        <rect x="2" y="18" width="20" height="2" rx="1" />
                    </svg>
                </button>
                {isMenuOpen && (
                    <div className="absolute bg-white w-64 rounded-md shadow-xl">
                        <a href="#" className="block  hover:bg-gray-200 text-gray-800 hover:text-gray-900">Home</a>
                        <a href="#" className="block  hover:bg-gray-200 text-gray-800 hover:text-gray-900">Blog</a>
                    </div>
                )}
            </div>
        </div>
    );
}
export default HeaderNavBar
