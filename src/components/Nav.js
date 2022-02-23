import React from 'react'
import logo from '../images/logo.png';

function Nav() {
    return (
        <>
            <nav className='w-5/6 mx-auto'>
                <ul className='flex py-2 place-content-center uppercase'>
                    <li className='mx-2 cursor-pointer my-auto active'>HOME</li>
                    <li className='mx-2 cursor-pointer my-auto'>ABOUT</li>
                    <li className='mx-2 cursor-pointer my-auto'>BLOG</li>
                    <li className='mx-2 cursor-pointer my-auto'>COLLABORATE</li>
                    <li className='mx-2 cursor-pointer my-auto'><img className="h-20 w-30" src={logo} alt="no logo" /></li>
                    <li className='mx-2 cursor-pointer my-auto'>CAREERS</li>
                    <li className='mx-2 cursor-pointer my-auto'>PRESS</li>
                    <li className='mx-2 cursor-pointer my-auto'>HOBVERSE</li>
                    <li className='mx-2 cursor-pointer my-auto'>SHOP</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav