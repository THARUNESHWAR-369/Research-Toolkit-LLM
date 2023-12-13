import pinecone
import os

pinecone.init(      
    api_key=os.environ['PINECONE_API_KEY'],      
    environment=os.environ['PINECONE_ENVIRONMENT']      
)      