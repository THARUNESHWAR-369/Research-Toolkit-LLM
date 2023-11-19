from flask import Flask, request, jsonify
from flask_cors import CORS
import os

from dotenv import load_dotenv
load_dotenv()

# blueprints
from src.blueprints.process.bp import ProcessView
from src.utils.status_codes import *

def create_app():
    
    app = Flask(__name__)
    app.config.from_prefixed_env()
    
    #CORS(app, origins=[])
    
    app.register_blueprint(ProcessView().bp)
    
    
    @app.errorhandler(NOT_FOUND_RESPONSE)
    def handle_404(e):
        return jsonify({'error': 'Not found'}), NOT_FOUND_RESPONSE

    @app.errorhandler(SERVER_BUSY_RESPONSE)
    def handle_500(e):
        return jsonify({'error': 'Something went wrong, we are working on it'}), SERVER_BUSY_RESPONSE

    return app

    

