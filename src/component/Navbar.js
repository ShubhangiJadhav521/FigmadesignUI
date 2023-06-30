import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar(props) {
    const [nav, setnav] = useState(false)
    return (
        <div className='bg-gradient-to-r from-[#7A3199] via-[#4f066e] to-[#bc84d4] ... p-6 items-center w-full fixed'>
            <div className='flex flex-row  justify-between text-white  font-[400] text-xl '>
                <div className='ml-16 pl-10 cursor-pointer'>
                    <h1 className='capitalize font-medium text-white hover:scale-105 duration-200 text-lg'>Logo</h1>
                </div>
                <ul className='  gap-32  mr-16 pr-10 md:flex hidden cursor-pointer'>
                    <li className='hover:scale-105 duration-200 text-lg' ><Link to={'about'} smooth duration={500}>About</Link></li>
                    <li className='hover:scale-105 duration-200 text-lg'><Link to={'Pricing'} smooth duration={500}>Pricing</Link></li>
                    <li className='hover:scale-105 duration-200 text-lg'><Link to={'Review'} smooth duration={500}>Review</Link></li>
                </ul>
                <div className='cursor-pointer pr-4 z-10 text-white md:hidden '
                    onClick={() => setnav(!nav)}>
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                {nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white text-[25px] gap-6 cursor-pointer'>
                        <li ><Link to={'about'} smooth duration={500} onClick={()=>setnav(false)}>About</Link></li>
                        <li><Link to={'Pricing'} smooth duration={500} onClick={()=>setnav(false)}>Pricing</Link></li>
                        <li><Link to={'Review'} smooth duration={500} onClick={()=>setnav(false)}>Review</Link></li>

                    </ul>
                )}



            </div>
        </div>

    );
}

export default Navbar;