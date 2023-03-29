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
        className="absolute right-12  bg-gray-400 p-2 rounded-md z-50" style={{marginRight:"15px"}}
        onClick={toggleDrawer}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <rect x="2" y="4" width="20" height="2" rx="1" />
          <rect x="2" y="11" width="20" height="2" rx="1" />
          <rect x="2" y="18" width="20" height="2" rx="1" />
        </svg>
      </button>
      
      <div
        className={` inset-0  transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } `}
        onClick={toggleDrawer}
      ></div>
     
        <div className="px-4 py-6 w-screen max-w-md">{isOpen && <DrawerContents />}</div>
      </div>
    
  );
};

export default Drawer;

