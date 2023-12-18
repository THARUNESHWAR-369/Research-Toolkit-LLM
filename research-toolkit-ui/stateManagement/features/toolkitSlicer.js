"use client";

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    connection: false,
    chunk_data : null,
    error_text: null,
    answer_response: [],
    source_model: false,
    result_method: '1'
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_CONNECTION':
            return {
                ...state,
                connection: action.payload
            }
        
        case 'SET_SCRAPPER':
            return {
                ...state,
                chunk_data: action.payload
            }

        case 'SET_ERROR_TEXT':
            return {
                ...state,
                error_text: action.payload
            }

        case 'SET_ANSWER_RESPONSE':
            return {
                ...state,
                answer_response: action.payload
            }

        case 'SET_SOURCE_MODEL':
            return {
                ...state,
                source_model: action.payload
            }
        
        case 'SET_RESULT_METHOD':
            return {
                ...state,
                result_method: action.payload
            };
        
        default:
            return state;
    }
}


// export const toolKitSlicer = createSlice({
//     name: 'toolKitSlicer',
//     initialState: {
//         connection: false,
//         chunk_data : null,
//         error_text: null,
//         answer_response: [],
//         source_model: false    },
//     reducers: {
//         updateConnection: (state, action) => {
//             state.connection = action.payload;
//         },
//         updateScrapper: (state, action) => {
//             state.chunk_data = action.payload;
//         },
//         updateErrorText: (state, action) => {
//             state.error_text = action.payload;
//         },
//         updateAnswerResponse: (state, action) => {
//             state.answer_response = action.payload;
//         },
//         updateSourceModel: (state, action) => {
//             state.source_model = action.payload;
//         }
//     }
// });

// export const { updateConnection, updateScrapper, updateErrorText, updateAnswerResponse, updateSourceModel, updateCopyText } = toolKitSlicer.actions;
// export default toolKitSlicer.reducer;