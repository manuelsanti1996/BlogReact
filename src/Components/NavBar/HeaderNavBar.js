import React from 'react'
import Drawer from './Drawer';
import Logo from './Logo';



const HeaderNavBar = () => {
         return (
        <div className='flex justify-between items-center py-4 border-b-2 border-stone-900 ml-4 mr-4'>
            <Logo />
            <Drawer/>
        </div>
    );
}
export default HeaderNavBar
