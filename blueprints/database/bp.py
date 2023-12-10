
from flask import Blueprint, jsonify, request
from flask_cors import CORS, cross_origin

import os

from typing import Any
from blueprints.database.db_pinecone import DB_PINECONE

class DatabaseView:
   

    def __init__(self) -> None:
       
        self.bp = Blueprint('database', __name__, url_prefix=os.environ['APP_PREFIX_ENDPOINT'] + '/database')

        CORS(self.bp)
        
        self.database_pinecone = DB_PINECONE

        self.bp.after_request(self.add_cors_headers)

        self.bp.add_url_rule('/pinecone/', view_func=self._db_pinecone, methods=['POST'])
        
    def add_cors_headers(self, response) -> Any:
        """
        Adds CORS headers to the response.

        Args:
            response (Any): The Flask response object.

        Returns:
            Any: The modified response object with CORS headers added.
        """
        response.headers["Access-Control-Allow-Origin"] = "*" 
        response.headers["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS, PUT, DELETE"
        response.headers["Access-Control-Allow-Headers"] = "Accept, Content-Type, Origin"
        response.headers["Access-Control-Allow-Credentials"] = "true"
        return response
    
    def _db_pinecone(self) -> Any:
        pass