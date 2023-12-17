
import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function InfoComponent() {

    const [status, setStatus] = useState(false);

    const dispatch = useDispatch();
    const toolkit_slicer = useSelector(state => state.toolkit_store);

    useEffect(() => {
        setStatus(toolkit_slicer.connection);
    }, [toolkit_slicer.connection]);

    return (
        <div className='absolute right-[1em] float-right flex gap-0 flex-col text-sm'>

            {!status ? (
                <span className='flex flex-row gap-2 justify-between text-white text-center items-center'>
                    <p>Connecting...</p>
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </span>
            ) : (
                <span className='flex flex-row gap-2 justify-between text-white text-center items-center'>
                    <p>Connected</p>
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                </span>
            )}
        </div >
    )
}

export default InfoComponent