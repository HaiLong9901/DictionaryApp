import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="Navbar flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className='w-full text-3xl font-bold text-secondaryColor'>HAILONG</h1>
        <ul className='hidden md:flex gap-4 w-[50%]'>
            <li className='p-4 box-border hover:bg-primaryColor hover:rounded-2xl'><Link to='#'> Home </Link></li>
            <li className='p-4 box-border hover:bg-primaryColor hover:rounded-2xl'><Link to='#'> About </Link></li>
            <li className='p-4 box-border hover:bg-primaryColor hover:rounded-2xl'><Link to='#'> List </Link></li>
            <li className='p-4 box-border hover:bg-primaryColor hover:rounded-2xl'><Link to='#'> Sign in </Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav? <FaBars size={20} /> : <FaTimes size={20} />}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-xl font-bold text-[#00df9a] m-4'>HAILONG</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 box-border border-b border-gray-600'>Home</li>
                <li className='p-4 box-border border-b border-gray-600'>About</li>
                <li className='p-4 box-border border-b border-gray-600'>University</li>
                <li className='p-4 box-border'><Link to='#'/> Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar