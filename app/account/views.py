
from . import account
from manage import Account
from flask import request
@account.route('/register' , methods=['POST'])
def register():
    username = request.form.get('username')
    password = request.form.get('password')
    email = request.form.get('email')
    user=Account(username=username,password=password,email=email)
    Account.add(user)
    return "None"
@account.route('/check' , methods=['POST'])
def check():
    username = request.form.get('username')
    username = str(username)
    users = Account(username=username)
    return Account.check(users)
