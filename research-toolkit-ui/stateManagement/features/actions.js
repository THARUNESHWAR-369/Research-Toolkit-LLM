
export const setConnection = (connection) => ({
    type: 'SET_CONNECTION',
    payload: connection
});

export const setScrapper = (scrapper) => ({
    type: 'SET_SCRAPPER',
    payload: scrapper
});

export const setErrorText = (errorText) => ({
    type: 'SET_ERROR_TEXT',
    payload: errorText
});

export const setAnswerResponse = (answerResponse) => ({
    type: 'SET_ANSWER_RESPONSE',
    payload: answerResponse
});

export const setSourceModel = (sourceModel) => ({
    type: 'SET_SOURCE_MODEL',
    payload: sourceModel
});

export const setResultMethod = (resultMethod) => ({
    type: 'SET_RESULT_METHOD',
    payload: resultMethod
});