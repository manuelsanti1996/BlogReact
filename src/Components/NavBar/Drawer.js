import React, { useState } from 'react';
import DrawerContents from './DrawerContents';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="absolute right-12  p-2 rounded-md z-50"
        style={{ marginRight: '15px' }}
        onClick={toggleDrawer}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="#fff" d="M5.7 5.7a1 1 0 011.41 0L12 10.59l4.89-4.88a1 1 0 111.41 1.41L13.41 12l4.88 4.89a1 1 0 01-1.41 1.41L12 13.41l-4.89 4.88a1 1 0 01-1.41-1.41L10.59 12 5.7 7.11a1 1 0 010-1.41z"/>
        </svg>
        
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <rect x="2" y="4" width="20" height="2" rx="1" />
            <rect x="2" y="11" width="20" height="2" rx="1" />
            <rect x="2" y="18" width="20" height="2" rx="1" />
          </svg>
        )}
      </button>
      <div
        className={`inset-0  transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        onClick={toggleDrawer}
      ></div>
      <div className="px-4 py-6 w-screen max-w-md">{isOpen && <DrawerContents />}</div>
    </div>
  );
};

export default Drawer;

