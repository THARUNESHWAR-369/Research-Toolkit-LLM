

import ChatWidget from '@/widget/chatWidget'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function ChatContainer() {

  const [dataDict, setDataDict] = React.useState(null);

  const dispatch = useDispatch();
  const toolkit_slicer = useSelector(state => state.toolkit_store);

  React.useLayoutEffect(() => {
    setDataDict(toolkit_slicer.answer_response);
  }, [dataDict, toolkit_slicer.answer_response]); 

  return (
    <div className='w-[100%] max-w-[54em] h-[100%] max-h-[38em] bg-white/10 mx-auto rounded-md relative'>
      <div className='chatContainer px-2 py-4 h-full w-full 
      mx-auto relative overflow-x-hidden overflow-y-scroll'>
        {dataDict && dataDict.length > 0 ? (
          dataDict.map((item, index) => (
            <div key={index} className='flex flex-col gap-2'>
              <ChatWidget tag={item.question} float={'left'} />
              <ChatWidget showsourcemodel={true} source={item.source} tag={item.answer} float={'right'} />
            </div>
          ))
        ) : (
          <div>
              {/* <ChatWidget showsourcemodel={false} tag="question" float={'left'} />
            <ChatWidget showsourcemodel={true} source={'sourcesourcesourcesource'} tag={"answer"} float={'right'} />

              */}

              <ChatWidget showsourcemodel={false} tag="..." float={'left'} />
            </div>
        )}
      </div>
    </div>
  )
}

export default ChatContainer