
from typing import Any
from langchain.llms import OpenAI
from langchain.chains.question_answering import load_qa_chain
from langchain.embeddings import OpenAIEmbeddings

class MODEL_OPENAI:
    
    MODEL_EMBEDDINGS = OpenAIEmbeddings()
    
    def __init__(self, 
                 model_name : str = 'text-davinci-003',
                 temperature : float = 0.5) -> None:
        self.openai_llm = OpenAI(model_name=model_name, temperature=temperature)
        
    def chain(self, chain_type : str = 'stuff') -> Any:
        return load_qa_chain(llm=self.openai_llm, chain_type=chain_type)
    