import faiss
from langchain.vectorstores import FAISS
from typing import Any

class FAISS_DB:

  @staticmethod
  def from_documents(data, embeddings) -> Any:
    return FAISS.from_documents(data, embeddings)

  @staticmethod
  def create_index_db(vec_dim) -> Any:
    return faiss.IndexFlatL2(vec_dim)

  @staticmethod
  def add_to_index(index, data) -> None:
    index.add(data)

  @staticmethod
  def search(index, search_query_vec : str, docs , k : int = 3) -> list:
    _, I = index.search(search_query_vec, k=k)

    retrieval_chunks_st = []

    for idx in I[0]:
      retrieval_chunks_st.append({
          "chunk":docs[idx].page_content,
          "source":docs[idx].metadata['source']
      })
      
    return retrieval_chunks_st
