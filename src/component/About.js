import React from 'react';

function About(props) {
    return (
        <div name='about' className='h-auto lg:h-screen w-full bg-gradient-to-b from-[#b774d4] via-[#ffff] to-[#ffff] ...  overflow-auto bg-fixed '>
            <div className='max-w-screen-lg mx-auto flex flex-col-reverse lg:flex-row
            item-center h-full px-4 mt-[10rem] gap-9 text-black py-8 '>
                <div className='gap-9 flex flex-col h-full '>
                    <div className='w-[268px] h-[160px]  left-[175.5px] rounded-[10px] border-[1px] border-[#7A3199] p-[30px] mx-auto hover:scale-105 duration-200'>
                        <h1 className='text-xl font-[600]'>Interactive Features</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                    </div>
                    <div className='w-[268px] h-[160px]  left-[175.5px] rounded-[10px] border-[1px] border-[#7A3199] p-[30px]  mx-auto  hover:scale-105 duration-200  '>
                        <h1 className='text-xl font-[600]'>Interative Features</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.  </p>
                    </div>
                </div>
                <div className='gap-9 flex flex-col'>
                    <div className='w-[268px] h-[160px] left-[175.5px] lg:mt-8 rounded-[10px] border-[1px] border-[#7A3199] p-[30px] mx-auto  hover:scale-105 duration-200 '>
                        <h1 className='text-xl font-[600]'>Interative Features</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className='w-[268px] h-[160px]  left-[175.5px] rounded-[10px] border-[1px] p-[30px] border-[#7A3199] mx-auto  hover:scale-105 duration-200 '>
                        <h1 className='text-xl font-[600]'>Interative Features</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                <div>
                    <div className='w-[416px] h-[274px]  left-[847.5px] rounded-[10px]  mx-auto p-10 lg:ml-14 lg:mt-10'>
                        <h1 className='text-3xl font-[600]'>About the Course</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer.</p>
                        <button className='text-white   bg-gradient-to-b from-[#4776E6] to-[#2352c0] px-12 py-3 my-2  mt-8 flex items-center rounded-md cursor-pointer justify-center  hover:scale-105 duration-200 '>
                            Explore Now
                        </button>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;