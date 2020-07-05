from . import websocket
from flask import request, jsonify
from websocket import create_connection
import datetime
from manage import url,send_alert
@websocket.route('/write_url', methods=['POST'])
def send_to_front():
    send_alert()
    photourl =str(request.form.get('url'))
    time =str(datetime.datetime.now())
    msg=url(time,photourl)
    url.add(msg)
    client_handle()
    if msg != None:
        return_dict = {
            "data": True,
            "code": 200,
            "msg": "寫入成功"
        }
    else:
        return_dict = {
            "data": False,
            "code": 423,
            "msg": "寫入失敗"
        }
    return jsonify(return_dict)

@websocket.route('/search', methods=['GET'])
def search():
    temp=url('0','0')
    return_dict = {
        "data": True,
        "code": 200,
        "msg": url.search(temp)
    }
    return jsonify(return_dict)

# =================function=========================
def client_handle():
    ws = create_connection('ws://34.71.251.0:12345/ws')
    if ws.connected:
        ws.send('Please Up Date')
        result = ws.recv()
