
from typing import Iterable, List, Any, cast
import json
from flask import jsonify
from langchain.text_splitter import RecursiveCharacterTextSplitter

from blueprints.models.documents import Documents

class PROCESS_CHUNKS:
    
    def __init__(self, chunk_size : int = 800, chunk_overlap : int = 50) -> None:
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap
        self.separator = ['\n\n', '\n', '.']
    
    @staticmethod
    def process_chunks(data : str) -> Any:
        text_splitter = RecursiveCharacterTextSplitter(
            separators=PROCESS_CHUNKS().separator,
            chunk_size=PROCESS_CHUNKS().chunk_size,
            chunk_overlap=PROCESS_CHUNKS().chunk_overlap
        )
        data = json.loads(data)
        
        documents = [Documents().from_dict(doc) for doc in data]
        
        docs = text_splitter.split_documents(documents=documents)
        
        dict_data = [Documents(page_content=doc.page_content, source=doc.metadata['source']).to_dict() for doc in docs]
        
        return jsonify(dict_data).data.decode('unicode-escape')
        
        