import React from 'react'
import Drawer from './Drawer';




const HeaderNavBar = () => {
    return (
        <div className='flex justify-between items-center py-4 border-b-2 border-stone-900 ml-4 mr-4'>
            <img src='./images/logo.jpeg' alt='' style={{ height: 40, width: 40, }} />
            <Drawer />
        </div>
    );
}
export default HeaderNavBar
