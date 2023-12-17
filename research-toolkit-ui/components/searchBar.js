import { fetch_process_questionAnswer } from '@/api/fetch';
import { updateAnswerResponse, updateErrorText } from '@/stateManagement/features/toolkitSlicer';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

function SearchBar() {

    const [chunks, setChunks] = React.useState(null);

    const dispatch = useDispatch();
    const toolkit_slicer = useSelector(state => state.toolkit_store);

    React.useEffect(() => {
        setChunks(toolkit_slicer.chunk_data);
    }, [toolkit_slicer.chunk_data]);

    const searchTextRef = useRef('');

    const handleInputChange = (e) => {
        searchTextRef.current = e.target.value;
    };


    const handleSearch = async () => {
        
        if (searchTextRef.current.toString().trim().length > 0) {
            try {
                console.log(toolkit_slicer.error_text)
                const response = await fetch_process_questionAnswer(chunks, searchTextRef.current.toString().trim(), false);

                const prev_response = toolkit_slicer.answer_response;
                const new_response = [...prev_response, response];
                dispatch(updateAnswerResponse(new_response));
            } catch (error) {
                // Handle error if needed
                console.error("Error fetching question answer:", error);
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
