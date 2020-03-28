from flask import Flask

app = Flask(__name__)

app.debug = True


from app.account import account as account_blueprint

app.register_blueprint(account_blueprint, url_prefix="/account")



