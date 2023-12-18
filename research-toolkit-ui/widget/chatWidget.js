import React from "react";
import SourceWidget from "./scourceWidget";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setSourceModel } from "@/stateManagement/features/actions";
import Divider from "@/components/_divider";

function ChatWidget({ source, tag = '...', isQuestion = false }) {

    const dispatch = useDispatch();

    const [sourceWidgetVisible, setSourceWidgetVisible] = React.useState(false);
    
    const toolkit_slicer_source_model = useSelector((state) => state.source_model);

    const updateSourceWidget = () => {
        setSourceWidgetVisible(!sourceWidgetVisible);
        dispatch(setSourceModel(!toolkit_slicer_source_model));
    };

    return (
        <div className='w-full px-2 relative float-right max-w-[25em]'>
            <div className={`chatwidget flex gap-1 p-2 shadow-2xl backdrop-blur-3xl my-[0.5em] 
            bg-white/10 rounded-md text-white w-fit font-bold ${(isQuestion ? 'justify-start float-left' : 'justify-end float-right')} relative`}>
                {tag}

                {
                    (!isQuestion) ? (
                        <div>
                            <span onClick={updateSourceWidget} className="chatsettings material-symbols-outlined cursor-pointer text-orange-300/70">
                                settings
                            </span>
                            <span onClick={() => {
                                navigator.clipboard.writeText(tag);
                            }} className="chatsettings material-symbols-outlined cursor-pointer text-orange-300/70">
                                content_paste
                            </span>
                            {(sourceWidgetVisible) && (<div className="sourcewidget-container absolute top-0 right-0 w-[100%]">
                                <div className='source-widget bg-white backdrop-blur-[100em] rounded-md shadow-md'>
                                    <div className="end p-2 flex justify-between w-full text-end">
                                        <p className="text-black">Source</p>
                                        <span onClick={updateSourceWidget} className="text-red-500 bg-red-500 rounded-full w-[1em] flex px-2 py-2 text-right float-right cursor-pointer">X</span>
                                    </div>
                                    <Divider style='mt-[0.2em] bg-[#858282] h-[1px]' />
                                    <div className='text-blue-400' style={{ wordWrap: 'break-word' }}>

                                        <p style={{ wordWrap: 'break-word', color: 'blue' }} className="text-blue-400 text-sm">
                                            <a href={source} target="_blank">{source}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    ) : (<></>)
                }

                {/* {showsourcemodel ? (
                    <div>
                        <span onClick={updateSourceWidget} className="chatsettings material-symbols-outlined cursor-pointer text-orange-300/70">
                            settings
                        </span>
                        <span onClick={() => {
                            navigator.clipboard.writeText(tag);
                        }} className="chatsettings material-symbols-outlined cursor-pointer text-orange-300/70">
                            content_paste
                        </span>
                    </div>
                ) : (<></>)}
                {
                    (showsourcemodel && sourceWidget) ? (<div className="sourcewidget-container absolute top-0 right-0 w-[100%]">
                            <SourceWidget source={source} />
                        </div>) : (<></>)
                } */}

            </div>
        </div>
    );
}

export default ChatWidget;