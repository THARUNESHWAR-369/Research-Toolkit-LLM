from flask import Blueprint, jsonify
from flask_cors import CORS, cross_origin

import os

from process.process_urls import PROCESS_URLS
from typing import Any

class ProcessView:
    
    def __init__(self) -> None:
        self.bp = Blueprint('process_urls', __name__, url_prefix=f"{os.environ['APP_PREFIX_ENDPOINT']}/process")
        CORS(self.bp)
        
        self.process_urls_model = PROCESS_URLS
        
        self.bp.after_request(self.add_cors_headers)
        
        self.bp.add_url_rule('/urls/', view_func=self.process_urls, methods=['POST'])
        
    def add_cors_headers(self, response) -> Any:
        response.headers["Access-Control-Allow-Origin"] = "*" 
        response.headers["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS, PUT, DELETE"
        response.headers["Access-Control-Allow-Headers"] = "Accept, Content-Type, Origin"
        response.headers["Access-Control-Allow-Credentials"] = "true"
        return response
    
    def process_urls(self, response) -> Any:
        """Process a list of URLs and return a list of documents chunks()"""
        try:
            data = response.get_json()

            urls = data.get('urls', [])

            result = self.process_urls_model.process_urls(urls)

            # Return the result as a JSON response
            return jsonify(result)

        except Exception as e:
            # Handle exceptions appropriately
            return jsonify({'error': str(e)})
        
        
