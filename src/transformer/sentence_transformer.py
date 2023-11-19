from sentence_transformers import SentenceTransformer
import numpy as np
from typing import Any

class SentenceTransformerModel:
    def __init__(self, model_name : str = "all-mpnet-base-v2")->None:
        self.st_encoder = SentenceTransformer(model_name)

    @staticmethod
    def getDocsPageContent(docs) -> list:
        return [doc.page_content for doc in docs]

    @staticmethod
    def _encode(data: list) -> Any:
        return SentenceTransformerModel().st_encoder.encode(data)

    @staticmethod
    def _encode_searchQuery(query) -> Any:
        return np.array(SentenceTransformerModel._encode(query)).reshape(1, -1)