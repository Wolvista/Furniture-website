import React from 'react'
import Image from 'next/image'
function Section06() {
  return (
    <div className='margin-y relative'>
      <Image src="/image/Home/sofar.png" alt="Section06" width={1920} height={500} className='w-full h-[500px] object-cover rounded-[36px]' />
      <div className='absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full text-center text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] text-white px-4'>
      We create enduring furniture using only responsibly sourced <span className="hidden lg:block" /> wood — blending beauty, integrity, and sustainability.
      </div>
    </div>
  )
}

export default Section06