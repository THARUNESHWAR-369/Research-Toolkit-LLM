import React from "react";
import SourceWidget from "./scourceWidget";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { updateSourceModel } from "@/stateManagement/features/toolkitSlicer";

function ChatWidget({ source, tag = '...', float = 'left', showsourcemodel=false }) {

    const [sourceWidget, setSourceWidget] = React.useState(false);

    const dispatch = useDispatch();
    const toolkit_slicer = useSelector(state => state.toolkit_store);

    React.useLayoutEffect(() => {
        setSourceWidget(toolkit_slicer.source_model)
    }, [toolkit_slicer.source_model]);

    const updateSourceWidget = () => {
        dispatch(updateSourceModel(!sourceWidget));
    };

    return (
        <div className='w-full px-2 relative float-right max-w-[25em]'>
            <div className={`chatwidget flex gap-1 p-2 shadow-2xl backdrop-blur-3xl my-[0.5em] 
            bg-white/10 rounded-md text-white w-fit font-bold float-${float} ${(float === 'right' ? 'justify-end' : 'justify-start')} relative`}>
                {tag}

                {showsourcemodel ? (
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
                }
                {/* {source !== undefined ? (
                    <>
                        {sourceWidget || showsourcemodel && (
                            <div>
                                <span onClick={updateSourceWidget} className="chatsettings material-symbols-outlined cursor-pointer text-orange-300/70">
                                    settings
                                </span>

                                <div className="sourcewidget-container absolute top-0 right-0 w-[100%]">
                                    <SourceWidget source={source} />
                                </div>
                            </div>
                        )}
                    </>
                ) : (<></>)} */}
            </div>
        </div>
    );
}

export default ChatWidget;