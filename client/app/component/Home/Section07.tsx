import React from 'react'
import Semore from '../Buttons/seemore'
function Section07() {
  return (
    <div className='margin-y'>
            <div className="small-text">
            Featured Collections
            </div>
            <div className="lg:flex flex-row items-center justify-between gap-4">
                <div className="subtitle text-left">
                Our Signature Creations 
                </div>
                <div className="description w-auto ">
                Founded in 2025, The Everwood Collection was born from a shared passion for  <span className="hidden lg:block" /> for craftsmanship, timeless design, and the belief that furniture should be as <span className="hidden lg:block" /> unique as the homes it inhabits.
                </div>
            </div>
            <Semore />
        </div>
  )
}

export default Section07