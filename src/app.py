from flask import Flask, request, jsonify
import os

from process_urls.process_urls import PROCESS_URLS

app = Flask(__name__)

@app.route(os.environ['APP_PREFIX_ENDPOINT'] + 'process-urls/', methods=['POST'])
def process_urls():
    """Process a list of URLs and return a list of documents chunks()"""
    try:
        data = request.get_json()

        urls = data.get('urls', [])

        result = PROCESS_URLS.process_urls(urls)

        # Return the result as a JSON response
        return jsonify(result)

    except Exception as e:
        # Handle exceptions appropriately
        return jsonify({'error': str(e)})

@app.route(os.environ['APP_PREFIX_ENDPOINT'] + 'vector-database/<db_name>/')
def vector_database(db_name : str):
    return f'<h1>{db_name}</h1>'

if __name__ == "__main__":
    app.run(debug=True)