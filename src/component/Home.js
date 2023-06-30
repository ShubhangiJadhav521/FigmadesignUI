import React from 'react';
import Image from '../component/image.png'
import Img1 from '../image/img1.png';
import Img2 from '../image/img2.png'

function Home(props) {
    return (

        <div name="home" className='h-auto lg:h-screen w-full  bg-fixed bg-gradient-to-b from-[#7A3199] via-[#4f066e] to-[#ffff] ... overflow-auto  md:overflow-y-hidden'>
            <div className='max-w-screen-lg mx-auto flex flex-col
            item-center justify-between h-full px-4 md:flex-row gap-12 '>
                <div className='flex flex-col justify-center h-full mt-72 lg:mt-0'>
                    <h2 className='text-4xl  text-white font-[700] text-[48px]  '>Learn how to launch a successfull podcast</h2>
                    <p className='py-4 max-w-md text-white text-xl'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <div >
                        <button className='text-white w-[237px] h-[74.86px] left-[175px] top-[390.14px]  bg-gradient-to-b from-[#4776E6] to-[#2352c0] px-8 py-5 my-2 mt-20 flex items-center rounded-md cursor-pointer justify-center hover:scale-105 duration-200 '>
                            Sign Up Now
                        </button>


                    </div>
                </div>
                <div className='mx-auto '>
                    <img src={Img1} alt='image' className='md:mt-64 lg:w-[50rem] w-[27rem] h-[381px] md:left-[30px]
                      py-4  rounded-[30px] p-4  '  />
                    <img src={Img2} alt='image' className='md:top-[24rem] top-[55rem] md:w-[27rem] w-[24rem] h-[330px]  lg:left-[57rem] left-[1rem] 
                           p-4 py-4 rounded-[30px] absolute'  />

                </div>

            </div>
        </div>
    );
}


export default Home;