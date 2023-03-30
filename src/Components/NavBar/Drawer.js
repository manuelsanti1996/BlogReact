import React, { useState } from 'react';
import DrawerContents from './DrawerContents';
import Hamburger from './Hamburger';
import Xsvg from './Xsvg';


const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="absolute   rounded-md z-50"
        style={{ marginRight: '15px' ,right:"-17px",top:"-8px"}}
        onClick={toggleDrawer}
      >
        {isOpen ? (
         <Xsvg />
        ) : (
          <Hamburger />
        )}
      </button>
      <div
        className={`inset-0  transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        onClick={toggleDrawer}
      ></div>
      <div>{isOpen && <DrawerContents />}</div>
    </div>
  );
};

export default Drawer;

