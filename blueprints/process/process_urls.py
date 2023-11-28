
from langchain.document_loaders import UnstructuredURLLoader
from typing import List, Any
import re

class PROCESS_URLS:
    """
    This class provides methods to process URLs and format the resulting documents.
    """

    def _formatDocuments(self, documents : Any) -> List[Any]:
        """
        Formats the documents by removing extra whitespace and tabs.

        Args:
            documents (Any): The list of documents to be formatted.

        Returns:
            List[Any]: The formatted list of documents.
        """
        for document in documents:
            document.page_content = ' '.join(line for line in document.page_content.split('\n') if '\t' not in line).strip()
            document.page_content =  re.sub(' +', ' ', document.page_content)
        return documents
    
    @staticmethod
    def process_urls(urls : List[str]) -> List[Any]:
        """
        Processes the given list of URLs and returns the formatted documents.

        Args:
            urls (List[str]): The list of URLs to be processed.

        Returns:
            List[Any]: The formatted list of documents.
        """
        print(urls)
        loader = UnstructuredURLLoader(urls)
        documents = loader.load()
        return PROCESS_URLS()._formatDocuments(documents)
    