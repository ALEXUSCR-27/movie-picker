from flask import Flask
from flask_cors import CORS

from app.movies.routes import movie_blueprint

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.register_blueprint(movie_blueprint)
    
    return app