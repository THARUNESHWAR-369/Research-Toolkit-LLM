
from langchain.document_loaders import UnstructuredURLLoader
from typing import List, Any

class PROCESS_URLS:
    
    def _formatDocuments(self, documents : Any) -> List[Any]:
        
        #doc_list : list = []
        for document in documents:
            document.page_content = ' '.join(line for line in document.page_content.split('\n') if '\t' not in line).strip()
            document.page_content =  re.sub(' +', ' ', document.page_content)
            #doc_list.append(document)
        return documents
    
    @staticmethod
    def process_urls(urls : List[str]) -> List[Any]:
        loader = UnstructuredURLLoader()
        documents = loader.load(urls)
        return PROCESS_URLS._formatDocuments(documents)
    