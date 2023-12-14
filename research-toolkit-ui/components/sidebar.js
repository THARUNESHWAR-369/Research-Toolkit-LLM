"use client"

import React from 'react';

function Sidebar() {

  const [sidebarWidth, setSidebarWidth] = React.useState(false);
  const [inputCount, setInputCount] = React.useState(1);
  const [urls, setUrls] = React.useState(['']);

  const sidebarArrow = () => {
    setSidebarWidth(!sidebarWidth);
  }

  const handleAddInput = () => {
    setInputCount((prevCount) => prevCount + 1);
    setUrls((prevUrls) => [...prevUrls, '']);
  };

  const handleInputChange = (index, value) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const handleRemoveInput = (index) => {
    const newUrls = [...urls];
    newUrls.splice(index, 1);
    setUrls(newUrls);
    setInputCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <div className="bg-red-500 w-[4em] h-[4em] absolute top-[7em] z-[-1]">
        <div className='bg-white w-4 h-4'></div>
      </div>
      <div className={`${sidebarWidth ? 'max-w-[20em]' : 'w-0'} transition-transform 
      delay-500 ease-linear h-[100%] fixed top-0 bg-white/10 shadow-lg backdrop-blur-3xl`}>
        <div className='w-[2em] h-[2.5em] text-white 
          cursor-pointer bg-white/50 rounded-r-full 
          flex justify-center items-center relative left-[100%] top-[8em] transition-all delay-200 ease-linear'>
          {!sidebarWidth ? <span onClick={sidebarArrow} className='text-white material-symbols-outlined'>
            arrow_right
          </span> : <span onClick={sidebarArrow} className='text-white material-symbols-outlined'>
            arrow_left</span>}
        </div>
        <div className='delay-[5000]'>
          {sidebarWidth ? <div className='p-2'>
            <div className='flex justify-between text-white cursor-pointer items-center'>
              <h1 className='text-white font-bold text-lg'>Urls</h1>
              <span className="material-symbols-outlined bg-white/50 rounded-full"
                onClick={handleAddInput}>
                add
              </span>
            </div>
            <div className='inputs py-3'>
              {Array.from({ length: inputCount }).map((_, index) => (
                <div key={index} className='relative'>
                  <input
                    key={index}
                    placeholder={`Url ${index + 1}`}
                    value={urls[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    className='mt-1 rounded-md w-full p-1 pl-2 border-none pr-8 outline-none bg-transparent backdrop-blur-3xl text-white'
                    style={{
                      '::placeholder': { color: 'white' },
                      MozPlaceholder: { color: 'white' },
                      WebkitPlaceholder: { color: 'white' },
                      msInputPlaceholder: { color: 'white' },
                    }}
                  ></input>
                  <span className="material-symbols-outlined absolute top-[25%] right-[1%] text-[#ff4500] drop-shadow-5xl cursor-pointer"
                  onClick={() => handleRemoveInput(index)}>
                    cancel
                  </span>
                </div>
              ))}
            </div>
          </div> : <></>}
        </div>
      </div>

    </div>
  )
}

export default Sidebar;