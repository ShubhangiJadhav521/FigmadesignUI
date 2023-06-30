import React from 'react';
import Lolla from '../image/Lolla 1.png';
import Star from '../image/star.png';
import fillDot from '../image/dot.png';
import Vector from '../image/Vector.png';

function Review(props) {
    return (
        <div name='Review' className='h-auto lg:h-screen w-full bg-[#ffff] bg-fixed '>
            <div className='max-w-screen-lg mx-auto flex flex-col
               h-full   '>
                <div className='w-[(462px] h-[108px] item-center  py-24 px-12  '>
                    <h1 className='text-4xl font-bold py-4 '>Review form Customers</h1>
                    <p className='max-w-md'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        when an unknown printer took.
                    </p>
                </div>
                <div className='grid lg:grid-cols-3 grid-rows-3 grid-cols-1 lg:mt-32  gap-10 lg:gap-48 mx-auto  mt-20 '>
                    <div className='w-[380px]   h-[238px] rounded-[10px] border-[1px] p-4 mx-4  hover:scale-105 duration-200 shadow-lg'>
                        <div className='w-[226px] h-[70px]  flex flex-row'>

                            <img className='w-[70px] h-[70px] rounded-[57px]' src={Lolla} />
                            <div className='p-3'>
                                <h1 className='text-xl font-semibold'>Lolla Smith</h1>
                                <p>Microsoft</p>
                                <div className='flex gap-2'>
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                </div>

                            </div>


                        </div>
                        <div className='p-3'>
                            <p className='max-w-md'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                when an unknown printer took.</p>
                        </div>

                    </div>
                    <div className='w-[380px]  h-[238px] rounded-[10px] border-[1px] p-4 mx-4 hover:scale-105 duration-200'>
                        <div className='w-[226px] h-[70px]  flex flex-row'>

                            <img className='w-[70px] h-[70px] rounded-[57px]' src={Lolla} />
                            <div className='p-3'>
                                <h1 className='text-xl font-semibold'>Lolla Smith</h1>
                                <p>Microsoft</p>
                                <div className='flex gap-2'>
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                </div>

                            </div>


                        </div>
                        <div className='p-3'>
                            <p className='max-w-md'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                when an unknown printer took.</p>
                        </div>

                    </div>
                    <div className='w-[380px]  h-[238px] rounded-[10px] border-[1px] p-4 mx-4 hover:scale-105 duration-200'>
                        <div className='w-[226px] h-[70px]  flex flex-row'>

                            <img className='w-[70px] h-[70px] rounded-[57px]' src={Lolla} />
                            <div className='p-3'>
                                <h1 className='text-xl font-semibold'>Lolla Smith</h1>
                                <p>Microsoft</p>
                                <div className='flex gap-2'>
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                </div>

                            </div>


                        </div>
                        <div className='p-3'>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                when an unknown printer took.</p>
                        </div>

                    </div>
                    <div className=' flex justify-center items-center gap-8 w-[171px] h-[15px] mx-auto lg:mx-96 py-6'>
                        <img src={fillDot} />
                        <img src={Vector} />
                        <img src={Vector} />
                        <img src={Vector} />
                    </div>

                </div>

            </div>


        </div>
    );
}

export default Review;