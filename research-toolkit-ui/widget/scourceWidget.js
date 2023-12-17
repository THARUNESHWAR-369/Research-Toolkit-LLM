

import Divider from '@/components/_divider'
import { updateSourceModel } from '@/stateManagement/features/toolkitSlicer';
import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux';

function SourceWidget({source}) {

  const [sourceWidget, setSourceWidget] = React.useState(false);

  const dispatch = useDispatch();
  const toolkit_slicer = useSelector(state => state.toolkit_store);

  React.useLayoutEffect(() => {
    setSourceWidget(toolkit_slicer.source_model)
  }, [toolkit_slicer.source_model]);

  const updateSourceWidget = () => {
    dispatch(updateSourceModel(!sourceWidget));
  };

  console.log(source);

  return (
    <div className='source-widget bg-white/50 backdrop-blur-[100em] rounded-md shadow-md'>
      <div className="end p-2 flex justify-between w-full text-end">
        <p className="text-black">Source</p>
        <span onClick={updateSourceWidget} className="text-red-500 bg-red-500 rounded-full w-[1em] flex px-2 py-2 text-right float-right cursor-pointer">X</span>
      </div>
      <Divider style='mt-[0.2em] bg-[#858282] h-[1px]' />
      <div className='text-blue-400' style={{ wordWrap: 'break-word' }}>
        {/* {source && source.length > 0 ? (
          source.map((item, index) => (
            <div key={index}>
              <p className="text-black text-sm">{item}</p>
            </div>
          ))
        ) : (
            <p className="text-black text-sm">No source found</p>)} */}
        <p style={{ wordWrap: 'break-word', color: 'blue' }} className="text-blue-400 text-sm">
          <a href={source} target="_blank">{source}</a>
          </p>
      </div>
    </div>
  )
}

export default SourceWidget