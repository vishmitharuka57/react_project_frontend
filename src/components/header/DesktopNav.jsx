import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNav = ({menuItems, Logo}) => {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
        <a href="/">
            <img className='size-52 position: relative top-8  right-9' src={Logo} alt="logo" />
        </a>
        <ul className='flex gap-7'>
            {
                menuItems?.map((menu,index) =>(
                    <li key={index}>
                        <Link to={menu} className='font-medium capitalize text-secondary'  >{menu}</Link>
                    </li>

                ))
            }
        </ul>
        {/* Login and signup btn */}
        <ul className='flex items-center gap-4 font-medium'>
            <li>
                <button className='text-secondary px-4 py-2 rounded'>Login</button>
            </li>
            <li>
                <button className='text-secondary px-4 py-2 rounded'>Sign up</button>
            </li>
        </ul>
        
    </div>
  )
}

export default DesktopNav