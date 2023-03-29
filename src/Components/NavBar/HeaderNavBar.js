import React from 'react'
import Drawer from './Drawer';

const HeaderNavBar = () => {
   
        return (
        <div className='flex justify-between items-center py-4 border-b-2 border-stone-900 ml-4 mr-4'>
            <div className='flex items-center'>
                <a href='#'>
                    <img src='./images/logo.jpeg' alt='Logo' style={{ height: '40px', width: '40px' }} />
                </a>
                <p>Blog</p>
            </div>
                <Drawer/>
        </div>
    );
}
export default HeaderNavBar
