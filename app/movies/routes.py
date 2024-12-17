
import os
import requests
from flask import Blueprint, jsonify, render_template, request

movie_blueprint = Blueprint('movie_blueprint', __name__, template_folder='templates')
key = os.getenv('x_rapidapi_key')
host = os.getenv('x_rapidapi_host')
api_url = os.getenv('FIND_URL')
headers = {
    "x-rapidapi-key":key,
    "x-rapidapi-host":host
}

@movie_blueprint.route('/search_movies', methods=['POST'])
def search_movies():
    movie_title = request.json['movie_title']
    querystring = {"query":movie_title}
    response = requests.get(api_url, headers=headers, params=querystring)

    response_json = response.json()

    movies_title = response_json['titleResults']['results']

    return movies_title, 200