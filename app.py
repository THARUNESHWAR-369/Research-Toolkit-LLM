from flask import Flask, jsonify
from flask_cors import CORS
import os

from dotenv import load_dotenv
load_dotenv()

# blueprints
from blueprints.process.bp import ProcessView
from utils.status_codes import *

    
app = Flask(__name__)
CORS(app, origins=[])

app.register_blueprint(ProcessView().bp)

@app.route("/")
def home():
    return "Hello, Flask!"

@app.errorhandler(NOT_FOUND_RESPONSE)
def handle_404(e):
    return jsonify({'error': 'Not found'}), NOT_FOUND_RESPONSE

@app.errorhandler(SERVER_BUSY_RESPONSE)
def handle_500(e):
    return jsonify({'error': 'Something went wrong, we are working on it'}), SERVER_BUSY_RESPONSE

if __name__ == "__main__":
    app.run(debug=True)