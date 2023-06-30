import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
function Joinpage(props) {
    return (
        <div className='h-auto  w-full bg-gradient-to-t from-[#7A3199] via-[#ffff] to-[#ffff] ... bg-fixed '>
            <div className='max-w-screen-lg mx-auto flex flex-col
            item-center justify-between h-full px-4 md:flex-row gap-12 '>
                <div className='text-white flex flex-col justify-center items-center lg:p-[10rem] '>
                    <h1 className=' leading-[38.73px] font-[700] text-[32px] py-7 text-black'>We have what you're looking for</h1>
                    <p className='text-blue-500'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        when an unknown printer took when an unknown printer took has been the industry's standard dummy text ever since the 1500s.</p>
                    <div>
                        <button className='text-white w-[237px] h-[60px]  bg-gradient-to-b from-[#4776E6] to-[#5a86ec] px-8 py-5 my-2 mt-20 flex items-center rounded-md cursor-pointer justify-center hover:bg-red-500 hover:scale-105 duration-200'>
                            Get Started Now
                        </button>
                    </div>
                </div>


            </div>
            <hr className='lg:mx-48 mx-12 lg:p-2 mt-9' />
            <div className='flex flex-col-reverse mx-auto justify-between  lg:mx-48 pb-3 text-white md:flex-row px-8 py-4 gap-4 align-center'>
                <div className='flex  px-2 justify-center'>
                    <p>All Right Reserved@Copyright2023</p>
                </div>
                <div >
                    <ul className='flex flex-row gap-5 justify-center'>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Product</li>
                    </ul>
                </div>
                <div className='flex gap-5 px-3  justify-center'>
                    <FaFacebook className='cursor-pointer text-white font-[700] text-2xl' />
                    < FaYoutube className='cursor-pointer font-[700] text-2xl' />
                    <FaInstagram className='cursor-pointer font-[700] text-2xl' />
                    <FaTwitter className='cursor-pointer font-[700] text-2xl' />
                </div>
            </div>
        </div>
    );
}

export default Joinpage;