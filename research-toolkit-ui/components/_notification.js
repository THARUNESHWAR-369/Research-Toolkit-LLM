
import { setErrorText } from '@/stateManagement/features/actions';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";

function NotificationConponent() {

    const [status, setStatus] = React.useState(false);
    const [errorText, setErrorTextUseState] = React.useState('');

    const dispatch = useDispatch();

    const toolkit_slicer_connection = useSelector((state) => state.connection);

    const toolkit_slicer_error_text = useSelector((state) => state.error_text);

    React.useEffect(() => {
        setStatus(toolkit_slicer_connection);
        if (!status) {
            dispatch(setErrorText('Process the Urls...'));
        }
        else {
            dispatch(setErrorText('Start Question Answering...'));

        }
    }, [toolkit_slicer_connection, dispatch, status]);

    React.useEffect(()=>{
        setErrorTextUseState(toolkit_slicer_error_text);
    }, [errorText, toolkit_slicer_error_text]);

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