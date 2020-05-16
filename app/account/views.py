from sqlalchemy import text
from . import account
from manage import Account
from flask import request, jsonify

#register
@account.route('/register' , methods=['POST'])
def register():
    username = request.form.get('username')
    password = request.form.get('password')
    email = request.form.get('email')
    user=Account(username=username,password=password,email=email)
    Account.add(user)
    if user!=None:
        return_dict = {
            "data": True,
            "code": 200,
            "msg": "註冊成功"
        }
    else:
        return_dict = {
            "data": False,
            "code": 423,
            "msg": "註冊失敗"
        }
    return jsonify(return_dict)

#login
@account.route('/login' , methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')
    email = request.form.get('email')
    username = str(username)
    password = str(password)
    email = str(email)
    users = Account(username=username,password=password,email=email)
    print(Account.check(users))
    result=Account.check(users)
    if result!=None:
        return_dict = {
            "data": True,
            "code": 200,
            "msg": "登入成功"
        }
    else:
        return_dict = {
            "data": False,
            "code": 423,
            "msg": "登入失敗"
        }
    return jsonify(return_dict)

#update
@account.route('/update' , methods=['PUT'])
def update():
    user_id =  request.form.get('user_id')
    username = request.form.get('username')
    password = request.form.get('password')
    email = request.form.get('email')
    username = str(username)
    password = str(password)
    email = str(email)
    users = Account(username=username, password=password, email=email)
    result=Account.update(users,user_id)
    print(result)
    return_dict = {
       "data": True,
       "code": 200,
       "msg": "修改成功"
        }
    return jsonify(return_dict)

#search
@account.route('/search' , methods=['GET'])
def search():
    username = request.form.get('username')
    username = str(username)
    users = Account(username=username, password="password", email="email")
    result=Account.search(users)
    user_dict = {
        "id": result.id,
        "username": result.username,
        "password": result.password,
        "email": result.email
    }
    return_dict = {
       "data": True,
       "code": 0,
       "msg": user_dict
        }
    return jsonify(return_dict)