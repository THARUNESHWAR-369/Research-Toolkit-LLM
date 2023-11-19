from database.faiss_db import FAISS_DB

from langchain.llms import OpenAI
from langchain.embeddings import OpenAIEmbeddings
from langchain.chains import RetrievalQAWithSourcesChain

class OpenAIModel:
  model = OpenAI()
  embeddings = OpenAIEmbeddings()
  db = FAISS_DB

  @staticmethod
  def run(docs, query) -> None:
    vectorstore = OpenAIModel.db.from_documents(docs, OpenAIModel.embeddings)
    chain = RetrievalQAWithSourcesChain.from_llm(llm=OpenAIModel.model, retriever=vectorstore.as_retriever())
    return chain({"question":query})