from flask import Blueprint, jsonify, request
from flask_cors import CORS, cross_origin

import os

from typing import Any

from blueprints.process.process_chunks import PROCESS_CHUNKS
from blueprints.process.process_scrape import SCRAPER

class ProcessView:
    """
    A class representing the process view.

    This class handles the processing of URLs.

    Attributes:
        bp (Blueprint): The Flask Blueprint object for the process URLs.
        process_urls_model (object): The model for processing URLs.

    Methods:
        __init__(): Initializes the ProcessView object.
        add_cors_headers(response): Adds CORS headers to the response.
        process_urls(): Processes the URLs and returns the result.
    """

    def __init__(self) -> None:
        """
        Initializes the ProcessView object.

        This method sets up the Flask Blueprint, adds CORS headers,
        and defines the URL rule for processing URLs.
        """
        self.bp = Blueprint('process', __name__, url_prefix=os.environ['APP_PREFIX_ENDPOINT'] + '/process')

        CORS(self.bp)
        
        self.process_scraper_model = SCRAPER
        self.process_chunk_model = PROCESS_CHUNKS

        self.bp.after_request(self.add_cors_headers)

        self.bp.add_url_rule('/urls/', view_func=self._process_scraper, methods=['POST'])
        self.bp.add_url_rule('/chunks/', view_func=self._process_chunks, methods=['POST'])
        
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
    
    def _process_chunks(self) -> Any:
        """
        Processes the URLs and returns the result.

        Returns:
            Any: The result of processing the URLs.
        """
        try:
            data = request.get_json() # type: ignore

            result = self.process_chunk_model.process_chunks(data)

            return jsonify(result)

        except Exception as e:
            return jsonify({'error': str(e)})
    
    def _process_scraper(self) -> Any:
        """
        Processes the URLs and returns the result.

        Returns:
            Any: The result of processing the URLs.
        """
        try:
            data = request.get_json() # type: ignore

            urls = data.get('urls', [])

            result = self.process_scraper_model.start_scrape(urls)

            return jsonify(result)

        except Exception as e:
            return jsonify({'error': str(e)})
        
        
