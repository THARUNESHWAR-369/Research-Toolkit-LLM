from langchain.document_loaders import UnstructuredURLLoader
import re
from langchain.text_splitter import RecursiveCharacterTextSplitter
from typing import Any
from models.openai_model import OpenAIModel
from models.falcon_model import FalconModel

class ResearchToolKit:

  # Prompt Templates
  chunk_pt = """Use the following portion of a long document to see if any of the text is relevant to answer the question. \nReturn any relevant text verbatim.\n{context}\nQuestion: {question}\nRelevant text, if any:"""
  final_ans_pt =  """Given the following extracted parts of a long document and a question given. \nIf you don't know the answer, just say that you don't know only. Don't try to make up an answer..QUESTION: {question}\n=========\n{summaries}\n=========\nFINAL ANSWER:"""

  def __formatPageContent(self) -> None:
    for doc in self.data:
      doc.page_content = ' '.join(line for line in doc.page_content.split('\n') if '\t' not in line).strip()
      doc.page_content =  re.sub(' +', ' ', doc.page_content)

  def __splitDocuments(self) -> Any:
    return self.text_splitter.split_documents(self.data)

  def __load_data(self, urls : list) -> None:
    self.urls = urls
    loader = UnstructuredURLLoader(urls=self.urls)
    self.data = loader.load()
    self.__formatPageContent()

  def __init__(self,
               model_name : str = 'falcon',
               text_splitter_params : dict = {'separators':['\n\n', '\n', '.'],'chunk_size':1000}) -> None:

    self.model_name = model_name
    self.text_splitter = RecursiveCharacterTextSplitter(
      **text_splitter_params
    )

  def run(self, urls : list, query : str) -> dict:

    # load data
    self.__load_data(urls)

    # split chunks
    self.__docs = self.__splitDocuments()
    
    print("DOCS: ",self.__docs)

    match self.model_name:
      case 'OpenAI LLM':
        return OpenAIModel.run(self.__docs, query)
      case 'Falcon LLM':
        return FalconModel.run(self.__docs, self.final_ans_pt, self.chunk_pt, query)
