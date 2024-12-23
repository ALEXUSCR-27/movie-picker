import os
import requests
from flask import Blueprint, jsonify, render_template, request

movie_blueprint = Blueprint('movie_blueprint', __name__, template_folder='templates')
KEY = os.getenv('x_rapidapi_key')
HOST = os.getenv('x_rapidapi_host')

OTT_API_URL = os.getenv('OTT_ADVANCED_SEARCH_URL')

REQUEST_HEADERS = {
    "x-rapidapi-key":KEY,
    "x-rapidapi-host":HOST
}

advanced_query = {
    "start_year":"1970",
    "end_year":"2024",
    "min_imdb":"2",
    "max_imdb":"10",
    "genre":"action",
    "language":"english",
    "type":"movie",
    "sort":"latest",
    "page":"1"
}

@movie_blueprint.route('/search_movies', methods=['POST'])
def search_movies():
    movie_genre = request.json['movie_title']
    advanced_query["genre"] = movie_genre

    response = requests.get(OTT_API_URL, headers=REQUEST_HEADERS, params=advanced_query)

    response_json = response.json()


    movies_result = response_json['results']
    
    
    fixed_result = [
        {"title": item['title'], "release_year": item['released'], "rating":item["imdbrating"], "synopsis":item["synopsis"], "image_url": item['imageurl'][0] if len(item['imageurl']) !=0  else ''} for item in movies_result
    ]

    return fixed_result, 200