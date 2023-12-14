

import React from 'react'

function SearchBar() {
    return (
        <div className='max-w-[34em] relative top-[1.1em] left-1/2 transform -translate-x-1/2'>
            <div className='w-full h-[4em] flex justify-center items-center gap-1'>
                <input type="text" placeholder='Search...' className='w-[100%] tracking-wide h-[2em] border-none outline-none bg-white/20 rounded-md p-2 text-white' />
                <span className="material-symbols-outlined relative bg-white/20 text-white h-[1.5em] w-[1.5em] rounded-md flex cursor-pointer justify-center items-center text-center text-[1.3em]">
                    search
                </span>
            </div>
        </div>
    )
}

export default SearchBar