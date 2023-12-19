# Research-Toolkit

[![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)](https://www.python.org/)
[![made-with-NextJs](https://img.shields.io/badge/Made%20with-NextJs-1f425f.svg)](https://nextjs.org/)

[![OpenAi Api](https://img.shields.io/badge/OpenAI-Api-red.svg)]([https://shields.io/](https://platform.openai.com/))
[![PineCone](https://img.shields.io/badge/Pinecone-Package-red.svg)]([https://shields.io/](https://platform.openai.com/))
[![Python Flask](https://img.shields.io/badge/Python-Flask-red.svg)]([https://shields.io/](https://platform.openai.com/))
[![Render Hosting](https://img.shields.io/badge/Render-Hosting-red.svg)]([https://shields.io/](https://platform.openai.com/))
[![Vercel Hosting](https://img.shields.io/badge/Vercel-Hosting-red.svg)]([https://shields.io/](https://platform.openai.com/))



## Overview 
The Research Toolkit is an advanced chatbot tailored for equity researchers. It streamlines the research process by incorporating ethical data scraping, semantic embedding using OpenAI, scalable storage with Pinecone, and a dynamic Next.js-based user interface. The toolkit facilitates efficient information retrieval through similarity search, offering a comprehensive solution for researchers to gather, analyze, and interact with relevant data.

## Key Features
- **Data Scraping:** Ethical scraping practices, content quality filters.
- **OpenAI Embedding:** cost-effective choices.
- **Pinecone Integration:** Scalability, security measures.
- **Similarity Search:** Training, relevancy ranking.
- **User Interface (Next.js):** Dynamic and customizable UI, personalization.

## Technologies Used
- **Backend:** Python (Flask), Langchain.
- **Data Processing:** OpenAI Embedding.
- **Storage:** Pinecone (Vector Database).
- **User Interface:** Next.js.

## Links
- **OpenAi Api**: [https://platform.openai.com/](https://platform.openai.com/)
- **Pinecone Api**: [https://app.pinecone.io/](https://app.pinecone.io/)

## Screenshots
![Screenshot 1](https://github.com/THARUNESHWAR-369/Research-Toolkit-LLM/assets/84437531/ce849aea-52ff-44d3-ac40-802c84fc9473)
![Screenshot 2](https://github.com/THARUNESHWAR-369/Research-Toolkit-LLM/assets/84437531/3d3e3bbd-4dc3-48bf-a149-49447db9a023)
![Screenshot 3](https://github.com/THARUNESHWAR-369/Research-Toolkit-LLM/assets/84437531/75fd7ae5-bf2c-40c8-8d58-2cca7bac2546)

## Flow Chart
![Flow Chart](https://github.com/THARUNESHWAR-369/Research-Toolkit-LLM/assets/84437531/9a39d94c-31f5-4cc2-871a-fa5e06794bee)

## Architecture
![Architecture 1](https://github.com/THARUNESHWAR-369/Research-Toolkit-LLM/assets/84437531/696e0caa-475e-46e2-9dda-3a8a13e02467)
![Architecture 2](https://github.com/THARUNESHWAR-369/Research-Toolkit-LLM/assets/84437531/8add31ce-d770-44c3-8a6d-5c8df0f0ef92)
![Architecture 3](https://github.com/THARUNESHWAR-369/Research-Toolkit-LLM/assets/84437531/31535a70-743a-4509-aed8-d8da22ec9d1e)

## Getting Started
1. Clone the repository: 
    ```bash
    git clone https://github.com/THARUNESHWAR-369/Research-Toolkit-LLM
    cd Research-Toolkit-LLM
    ```

2. Run the Api Server
    ```bash
    cd api
    pip install -r requirements.txt
    ```

    Create a .env file and add (for api):
    ```env
    OPENAI_API_KEY="<your api key>"
    PINECONE_API_KEY="<your api key>"
    PINECONE_INDEX_NAME="<your api key>"
    PINECONE_ENVIRONMENT="<your api key>"
    ```

    ```bash
    python app.py
    ```

3. Run the UI
    ```bash
    cd research-toolkot-ui
    ```

    Create a .env.local file and add (for ui):
    ```env
    NEXT_PUBLIC_API_HOST="<your api key>"
    ```

    ```bash
    npm install
    npm run dev
    ```

4. Access the Api at `http://localhost:5000`
5. Access the Application at `http://localhost:5173`
