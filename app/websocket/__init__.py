from flask import Blueprint

websocket = Blueprint("websocket", __name__)
import app.websocket.views

