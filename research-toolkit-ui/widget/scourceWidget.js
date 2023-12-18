

import Divider from '@/components/_divider'
import { setSourceModel } from '@/stateManagement/features/actions';
import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux';

function SourceWidget({ sourceWidgetVisible, source, onToggleSourceWidget }) {

  const dispatch = useDispatch();

  const toolkit_slicer_source_model = useSelector((state) => state.source_model);

  const closeSourceWidget = () => {
    dispatch(setSourceModel(!sourceWidgetVisible));
  };

  return (
    <div className='source-widget bg-white backdrop-blur-[100em] rounded-md shadow-md'>
      <div className="end p-2 flex justify-between w-full text-end">
        <p className="text-black">Source</p>
        <span onClick={closeSourceWidget} className="text-red-500 bg-red-500 rounded-full w-[1em] flex px-2 py-2 text-right float-right cursor-pointer">X</span>
      </div>
      <Divider style='mt-[0.2em] bg-[#858282] h-[1px]' />
      <div className='text-blue-400' style={{ wordWrap: 'break-word' }}>
   
        <p style={{ wordWrap: 'break-word', color: 'blue' }} className="text-blue-400 text-sm">
          <a href={source} target="_blank">{source}</a>
          </p>
      </div>
    </div>
  )
}

export default SourceWidget