import React from 'react'
import Image from 'next/image'
import Bookacall from '../Buttons/bookacall'
import Tooltip from '../Tooltip/Tooltip'
function Section02() {
    return (
        <div className='margin-y'>
            {/* Mobile: show tooltip block at the very top */}
            <div className='flex sm:hidden mb-2 w-full flex-col items-center justify-center text-center'>
                <Tooltip />
                <div className='text-small-text font-bold -mt-[35px]'>
                    200+ Happy Customers
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
                <div className='col-span-3 relative'>
                    <Image src="/image/Home/Heroimage.png" alt="Section02" width={1920} height={500} className='w-full h-auto object-cover' />
                    {/* Desktop/Tablet: overlay tooltip */}
                    <div className='hidden sm:block sm:absolute top-0 left-0'>
                        <Tooltip />
                        <div className='font-small-text sm:mt-[-45px]  md:mt-[-45px] lg:-mt-[45px] xl:-mt-[45px] 2xl:-mt-[35px] font-bold'>
                            200+ Happy Customers
                        </div>
                    </div>
                    {/* Mobile: place button below image, Desktop: keep absolute */}
                    <div className='hidden md:block absolute bottom-0 right-0'>
                        <Bookacall />
                    </div>
                    <div className='block md:hidden mt-2'>
                        <Bookacall />
                    </div>
                </div>


                <div className='col-span-2 flex flex-col justify-between gap-4'>
                    <div className='w-full'>
                        <Image src="/image/Home/Hero2nd.png" alt="Section02" width={1920} height={500} className='w-full h-full object-cover' />
                    </div>

                    <div className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[12px] xl:text-[20px] 2xl:text-[22px]'>
                        The Everwood Collection brings together modern design and masterful craftsmanship to create timeless pieces that transform your home.
                    </div>
                    <div className='flex flex-row items-center justify-between w-full'>
                        <div className='description'>
                            01
                        </div>
                        <div className='grid grid-cols-3 items-center justify-between'>
                            <div className='h-[2px] w-[70px] sm:w-[150px] md:w-[200px] lg:w-[100px] xl:w-[100px] 2xl:w-[150px]   bg-black '>
                            </div>
                            <div className='h-[2px] w-[70px] sm:w-[150px] md:w-[200px] lg:w-[100px] xl:w-[100px] 2xl:w-[150px]  bg-[#D9D9D9] '>
                            </div>
                            <div className='h-[2px] w-[70px] sm:w-[150px] md:w-[200px] lg:w-[100px] xl:w-[100px] 2xl:w-[150px]  bg-[#D9D9D9] '>
                            </div>
                        </div>
                        <div className='description'>
                            03
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 justify-between w-full overflow-hidden'>
                        <Image src="/image/Home/Herosub1.png" alt="Section02" width={3920} height={1000} className='h-full w-auto object-cover' />
                        <Image src="/image/Home/Herosub2.png" alt="Section02" width={3920} height={1000} className='h-full w-auto object-cover' />
                        <Image src="/image/Home/Herosub2.png" alt="Section01" width={3920} height={1000} className='h-full w-auto object-cover' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Section02