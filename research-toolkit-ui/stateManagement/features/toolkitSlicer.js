
"use client";

import { createSlice } from '@reduxjs/toolkit';

export const toolKitSlicer = createSlice({
    name: 'toolKitSlicer',
    initialState: {
        connection: false,
        chunk_data : null,
        error_text: null,
        answer_response: [],
        source_model: false
    },
    reducers: {
        updateConnection: (state, action) => {
            state.connection = action.payload;
        },
        updateScrapper: (state, action) => {
            state.chunk_data = action.payload;
        },
        updateErrorText: (state, action) => {
            state.error_text = action.payload;
        },
        updateAnswerResponse: (state, action) => {
            state.answer_response = action.payload;
        },
        updateSourceModel: (state, action) => {
            state.source_model = action.payload;
        }
    }
});

export const { updateConnection, updateScrapper, updateErrorText, updateAnswerResponse, updateSourceModel } = toolKitSlicer.actions;
export default toolKitSlicer.reducer;