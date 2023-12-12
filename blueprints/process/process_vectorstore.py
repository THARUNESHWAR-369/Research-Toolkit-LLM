

from typing import Any, List
from blueprints.dto.documents import Documents
from blueprints.process.database.db_pinecone import DB_PINECONE


class PROCESS_VECTORSTORE:
    
    @staticmethod
    def index(docs : List[Documents], embeddings : Any) -> Any:
        return DB_PINECONE.from_documents(docs, embeddings)
    
    @staticmethod
    def retrieve_from_db(pinecone_index : Any,search_query_vec : str, k : int = 3) -> List[dict]:
        return pinecone_index.similarity_search(search_query_vec, k=k)