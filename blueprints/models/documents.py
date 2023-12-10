
from typing import Any
import re

class Documents:
    
    def __init__(self, page_content : str ="", source : str="") -> None:
        self.page_content = page_content
        self.metadata = {
            "source" : source
        }
        
    def format_data(self, page_content : str) -> Any:
        page_content = ' '.join(line for line in page_content.split('\n') if '\t' not in line).strip()
        page_content =  re.sub(' +', ' ', page_content)
        return page_content
    
    def to_dict(self):
        data = self.format_data(self.page_content)
        return {
            "page_content" : data,
            "metadata" : self.metadata
        }
    
    @classmethod
    def from_dict(cls, data: Any) -> Any:
        page_content = data.get("page_content", "")
        source = data.get("metadata", {}).get("source", "")
        return cls(page_content, source)
        
    def __getitem__(self, key: Any) -> Any:
        # Define the behavior when indexing is used
        if key == "page_content":
            return self.page_content
        elif key == "metadata":
            return self.metadata
        else:
            raise KeyError(f"Key '{key}' not found in Documents")

                
    def __repr__(self) -> str:
        return f"Documents(page_content = {self.page_content}, metadata = {self.metadata})"
