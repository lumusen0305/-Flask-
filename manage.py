from flask import Flask


app = Flask(__name__)

from app.account import account as account_blueprint

app.register_blueprint(account_blueprint, url_prefix="/account")
if __name__ == "__main__":
    app.run(debug=True)