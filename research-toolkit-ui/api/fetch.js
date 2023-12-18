import axios from "axios";


export async function fetch_process_urls(urls, result_method) {

    const process_urls_url = process.env.NEXT_PUBLIC_API_HOST + 'urls/'
    const process_chunks_url = process.env.NEXT_PUBLIC_API_HOST + 'chunks/'

    try {
        const options_urls = {
            method: 'POST',
            url: process_urls_url,
            data: { urls: urls },
        };

        const response_process_urls = await axios.request(options_urls);

        const options_chunks = {
            method: 'POST',
            url: process_chunks_url,
            data: { docs: response_process_urls.data },
        };

        const response_process_docs = await axios.request(options_chunks);

        return response_process_docs.data;

    } catch (error) {
        console.error('Error processing URLs:', error);
        throw error;
    }
}

export async function fetch_process_questionAnswer(docs, question, withQA=false) {

    let url = withQA ? process.env.NEXT_PUBLIC_API_HOST + 'question_answer_withqa/' : process.env.NEXT_PUBLIC_API_HOST + 'question_answer_chain/'

    let data = {
        question: question,
        chunks_docs: docs
    }

    try {
        const options = {
            method: 'POST',
            url: url,
            data: data,
        };

        const response = await axios.request(options);
        return response.data;
        
    } catch (error) {
        console.error('Error processing URLs:', error);
        throw error;
    }

}
