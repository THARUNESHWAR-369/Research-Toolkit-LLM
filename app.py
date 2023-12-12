from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from blueprints.process.bp import ProcessView
from utils.status_codes import *

# Load environment variables from .env file
load_dotenv()
    
app = Flask(__name__)
CORS(app, origins=[])

app.register_blueprint(ProcessView().bp)

@app.errorhandler(NOT_FOUND_RESPONSE)
def handle_404(e):
    return jsonify({'error': 'Not found'}), NOT_FOUND_RESPONSE

@app.errorhandler(SERVER_BUSY_RESPONSE)
def handle_500(e):
    """
    Error handler for 500 Internal Server Error.

    Args:
        e: The exception object.

    Returns:
        A JSON response with an error message and the status code.
    """
    return jsonify({'error': 'Something went wrong, we are working on it'}), SERVER_BUSY_RESPONSE

if __name__ == "__main__":
    app.run(debug=True)