
from langchain.vectorstores import Pinecone
from typing import List, Any
import os

from blueprints.models.documents import Documents

class DB_PINECONE:
    
    @staticmethod
    def from_documents(docs: List[Documents], openai_embeddings : Any) -> Any:
        pinecone_index = Pinecone.from_documents(docs, openai_embeddings, index_name=os.environ['PINECONE_INDEX_NAME'])
        return pinecone_index