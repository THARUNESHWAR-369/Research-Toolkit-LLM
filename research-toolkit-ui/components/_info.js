

import React from 'react'

function InfoComponent() {
    return (
        <div className='absolute right-[1em] float-right flex gap-0 flex-col text-sm'>
            <span className='flex flex-row gap-2 justify-between text-white text-center items-center'>
                <p>Connecting...</p>
                <span className='w-3 h-3 rounded-full bg-red-500 block'></span>
            </span>
        </div>
    )
}

export default InfoComponent