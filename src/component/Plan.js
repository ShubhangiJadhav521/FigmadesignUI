import React from 'react';

function Plan(props) {
    return (
        <div name="Pricing" className='h-auto lg:h-screen w-full bg-[#ffff] bg-fixed lg:overflow-hidden'>
            <div className='max-w-screen-lg mx-auto flex flex-col
             h-full px-4   '>
                <div className='text-black  mx-auto w-[455px] h-[166px] top-[76px] left-[492px]  '>
                    <h1 className='text-3xl items-center font-[700] '>Choose Your Plan</h1>
                    <p className='max-w-sm'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer.</p>
                </div>
                <div className='grid lg:grid-cols-3 grid-rows-3 grid-cols-1 lg:mt-32 lg:gap-32 gap-20 mx-auto'>
                    < div className='w-[303px] h-[357px] top-[296px] left-[175px] rounded-[10px] border-[1px] border-[#7A3199]  gap-[24px]  p-4  hover:scale-105 duration-200'>
                        <h1 className='text-xl font-semibold py-3'>Basic Plan</h1>
                        <p className='py-2'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer.</p>
                        <strong className='text-xl text-[#7A3199]'>$ 54 /month</strong>
                        <ul className='list-disc px-3 py-4 font-bold' >
                            <li>Free access to video class</li>
                            <li>Free access to video class</li>
                            <li>Free access to video class</li>
                        </ul>
                        <div className='w-[149px] h-[44px] rounded-[5px] border-[1px] border-[#7A3199]  text-[#7A3199] items-center p-4  flex justify-center cursor-pointer'>
                            <h1 className=' '>Start Free Trial</h1>
                        </div>
                    </div>
                    < div className='w-[303px] h-[357px] top-[296px] left-[175px] rounded-[10px] border-[1px] p-3 gap-[24px] border-[#7A3199] bg-[#7A3199] text-white  hover:scale-105 duration-200'>
                        <h1 className='text-xl font-semibold py-3'>Premium Plan</h1>
                        <p className='py-2'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer.</p>
                        <strong className='text-xl text-[#ffff]'>$ 54 /month</strong>
                        <ul className='list-disc px-3 py-4 font-bold' >
                            <li>Free access to video class</li>
                            <li>Free access to video class</li>
                            <li>Free access to video class</li>
                        </ul>
                        <div className='w-[149px] h-[44px] rounded-[5px] border-[1px] border-[#7A3199]  text-[#7A3199] items-center p-4  flex justify-center bg-white cursor-pointer'>
                            <h1 className=' '>Start Free Trial</h1>
                        </div>
                    </div>
                    < div className='w-[303px] h-[357px] top-[296px] left-[175px] rounded-[10px] border-[1px] p-3 gap-[24px] border-[#7A3199]  hover:scale-105 duration-200'>
                        <h1 className='text-xl font-semibold py-3'>Basic Plan</h1>
                        <p className='py-2'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer.</p>
                        <strong className='text-xl text-[#7A3199]'>$ 54 /month</strong>
                        <ul className='list-disc px-3 py-4 font-bold' >
                            <li>Free access to video class</li>
                            <li>Free access to video class</li>
                            <li>Free access to video class</li>
                        </ul>
                        <div className='w-[149px] h-[44px] rounded-[5px] border-[1px] border-[#7A3199]  text-[#7A3199] items-center p-4  flex justify-center cursor-pointer  '>
                            <h1 className=' '>Start Free Trial</h1>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Plan;