
import { updateErrorText } from '@/stateManagement/features/toolkitSlicer';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";


function NotificationConponent() {

    const [status, setStatus] = React.useState(false);
    const [errorText, setErrorText] = React.useState('');

    const dispatch = useDispatch();
    const toolkit_slicer = useSelector(state => state.toolkit_store);

    React.useEffect(() => {
        setStatus(toolkit_slicer.connection);
    }, [toolkit_slicer.connection]);

    React.useEffect(() => {
        if (!status) { dispatch(updateErrorText('Process the Urls...')); }
        if (status) { dispatch(updateErrorText('Start Question Answering...')); }
    }, [status, toolkit_slicer.error_text]);

    React.useEffect(()=>{
        setErrorText(toolkit_slicer.error_text);
    }, [errorText, toolkit_slicer.error_text]);

    return (
        <div className='text-white mt-6 text-center w-fit flex relative flex-row-reverse items-center mx-auto my-4 gap-2'>
            <p>{errorText}</p>
            <span className="flex h-3 w-3 bg-white rounded-full">
                <span className="animate-ping inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            </span>
        </div>
    )
}

export default NotificationConponent