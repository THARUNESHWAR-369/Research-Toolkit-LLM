import { fetch_process_questionAnswer } from '@/api/fetch';
import { setAnswerResponse, setErrorText } from '@/stateManagement/features/actions';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

function SearchBar() {

    const [chunks, setChunks] = React.useState(null);
    const [resultMethod, setResultMethod] = React.useState(null);

    const dispatch = useDispatch();

    const toolkit_slicer_chunk_data = useSelector((state) => state.chunk_data);

    const toolkit_slicer_error_text = useSelector((state) => state.error_text);

    const toolkit_slicer_answer_response = useSelector((state) => state.answer_response);

    const toolkit_slicer_result_method = useSelector((state) => state.result_method);

    React.useEffect(() => { 
        setResultMethod(toolkit_slicer_result_method);
    }, [toolkit_slicer_result_method]);


    React.useEffect(() => {
        setChunks(toolkit_slicer_chunk_data);
    }, [toolkit_slicer_chunk_data]);


    const searchTextRef = useRef('');

    const handleInputChange = (e) => {
        searchTextRef.current = e.target.value;
    };

    const handleSearch = async () => {
        dispatch(setErrorText("Fetching Answer..."));
        if (searchTextRef.current.toString().trim().length > 0) {
            try {
                const response = await fetch_process_questionAnswer(chunks, 
                    searchTextRef.current.toString().trim(), 
                    (toolkit_slicer_result_method === '2') ? true : false);

                const prev_response = toolkit_slicer_answer_response;
                const new_response = [...prev_response, response];
                dispatch(setAnswerResponse(new_response));
                dispatch(setErrorText("Start Question Answering..."));

            } catch (error) {
                dispatch(setErrorText("Error in searching..."));

            }
        }
    };

    return (
        <div className='max-w-[34em] relative top-[1.1em] left-1/2 transform -translate-x-1/2'>
            <div className='w-full h-[4em] flex justify-center items-center gap-1'>
                <input
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Your Questions...'
                    className='w-[100%] tracking-wide h-[2.8em] border-none outline-none bg-white/20 rounded-md p-2 text-white'
                />
                <span
                    onClick={handleSearch}
                    className="material-symbols-outlined relative bg-white/20 text-white h-[2em] w-[2em] rounded-md flex cursor-pointer justify-center items-center text-center text-[1.3em]">
                    search
                </span>
            </div>
        </div>
    );
}

export default SearchBar;
