from database.faiss_db import FAISS_DB
from langchain.llms import HuggingFaceHub
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from transformer.sentence_transformer import SentenceTransformerModel
from typing import Any
import os

class FalconModel:
  embeddings = SentenceTransformerModel()
  db = FAISS_DB

  @staticmethod
  def get_falcon_llm(temperature : int = 0.9, max_new_tokens : int = 1000, model_id : str = 'tiiuae/falcon-7b-instruct') -> Any:
    return HuggingFaceHub(huggingfacehub_api_token=os.environ['HUGGING_FACE_API_KEY'],
                            repo_id=model_id,
                            model_kwargs={"temperature":temperature,"max_new_tokens":max_new_tokens})

  @staticmethod
  def run(docs, ccr_prompt, ecr_prompt, query):

    def eachChunkResponse(retrieved_chunks, prompt, question) -> list:
      response = []
      for chunks in retrieved_chunks:
        prompt_template = PromptTemplate(
            template=prompt,
          input_variables={'context', 'question'},
        )
        chain = LLMChain(llm=FalconModel.get_falcon_llm(), prompt=prompt_template)
        result=chain.run(
            context=chunks['chunk'],
            question=question
        )
        response.append(
            {
                "question":question,
                "answer":str(result),
                "source":chunks['source']
            }
        )
      return response

    def combineChunkReponse(ccr_prompt, ecr_prompt, retrieved_chunks, question) -> list:

      each_reponse = eachChunkResponse(retrieved_chunks, ecr_prompt, question)

      answer_chunk = "\n".join(i['answer'] for i in each_reponse)
      source = list(set([s['source'] for s in each_reponse ]))

      prompt_template = PromptTemplate(
        template=ccr_prompt,
        input_variables={'question', 'summaries'},
      )
      chain = LLMChain(llm=FalconModel.get_falcon_llm(), prompt=prompt_template)
      result=chain.run(
        summaries=answer_chunk,
        question=question,
      )
      return result, source

    # Save Embeddings
    docs_arr = FalconModel.embeddings.getDocsPageContent(docs)
    docs_vectors = FalconModel.embeddings._encode(docs_arr)
    index = FalconModel.db.create_index_db(docs_vectors.shape[1])
    FalconModel.db.add_to_index(index, docs_vectors)

    # Search Query
    search_query_vec = FalconModel.embeddings._encode_searchQuery(query)
    retrieval_chunks = FalconModel.db.search(index, search_query_vec, docs)

    return combineChunkReponse(ccr_prompt, ecr_prompt, retrieval_chunks, query)
