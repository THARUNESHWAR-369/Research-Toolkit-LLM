import streamlit as st
from toolkit.toolkit import ResearchToolKit

from dotenv import load_dotenv
load_dotenv()


st.title("Research Toolkit")

model = st.sidebar.selectbox(
   "Choose the llm model",
   ("Falcon LLM", "OpenAI LLM"),
   index=0,
   placeholder="Select the llm model...",
)

st.sidebar.title("Article URLs")


urls = []
for i in range(3):
    url = st.sidebar.text_input(f"URL {i+1}")
    urls.append(url)

process_url_clicked = st.sidebar.button("Process URLs")

query = st.text_input("Question: ")

if process_url_clicked:
    print("Running...")
    print(f"Model={model} | urls={urls} | query={query}")
    print(ResearchToolKit(model_name=model).run(
        urls=urls,
        query=query))



