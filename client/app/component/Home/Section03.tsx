import React from 'react'
import Aboutus from '../Buttons/aboutus'

function Section03() {
    return (
        <div className='margin-y'>
            <div className="small-text">
                About us
            </div>
            <div className="lg:flex flex-row items-center justify-between gap-4">
                <div className="subtitle text-left">
                    Crafting furniture that feels <span className="hidden lg:block" /> like home
                </div>
                <div className="description w-auto ">
                    Founded in 2025, The Everwood Collection was born from a shared passion <span className="hidden lg:block" /> for craftsmanship, timeless design, and the belief that furniture should be as <span className="hidden lg:block" /> unique as the homes it inhabits.
                </div>
            </div>
            <Aboutus />
        </div>
    )
}

export default Section03