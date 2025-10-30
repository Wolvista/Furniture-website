import React from 'react'
import Tooltip from '../Tooltip/Tooltip'
function Section09() {
    return (
        <div className='margin-y'>
            <div className='subtitle items-center justify-center text-center'>
                What Our Clients Say
            </div>
            <div className='margin-y'>
                <div className='bg-[#EBEBEB] rounded-[36px] p-10 px-15'>
                    <div className='description items-center justify-center text-center'>
                        “The craftsmanship is exceptional — our dining table feels like a true heirloom. Every detail, from the joints to the finish, reflects care and artistry. Everwood turned our idea into something timeless and personal.”
                    </div>

                    <div className='description items-center justify-center text-center mt-4 font-bold'>
                        Amara D.
                    </div>
                    <div className='description items-center justify-center text-center mt-4 '>
                        Software Engineer
                    </div>
                    <Tooltip />
                </div>


            </div>

        </div>
    )
}

export default Section09