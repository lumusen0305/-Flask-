from flask import Flask


app = Flask(__name__)
# ====================================================================
from flask_sqlalchemy import SQLAlchemy
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://pguhbdjcadenyh:5724176d79b7afd98ddbe7cbe390dabfa40f0de1f0745468dc67f6eda2c1697b@ec2-3-234-109-123.compute-1.amazonaws.com:5432/d4v5kaf1e8vg2l'
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.sqlite"

db = SQLAlchemy(app)
migrate = Migrate(app, db)

manager = Manager(app)
manager.add_command('db', MigrateCommand)

class User(db.Model):
    __tablename__ = 'Users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __init__(self, username, email):
        self.username = username
        self.email = email

    def __repr__(self):
        return '<User %r>' % self.username

class Account(db.Model):
    __tablename__ = 'Account'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=True)
    password = db.Column(db.String, unique=True, nullable=True)
    email = db.Column(db.String, unique=True, nullable=True)
    def __init__(self, username,password,email):
        self.username = username
        self.password = password
        self.email = email
    def nameaccount(self, username):
        self.username = username

    def __repr__(self):
        return '<User %r>' % self.username

    def add(self):
        db.session.add(self)
        db.session.commit()
    def check(self):
        result = Account.query.filter(Account.username == self.username).first()
        return result

class Temperature(db.Model):
    __tablename__ = 'Temperature'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    temperature = db.Column(db.String)
    time = db.Column(db.String)
    photourl = db.Column(db.String)

class Door(db.Model):
    __tablename__ = 'Door'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    time = db.Column(db.String)
    photourl = db.Column(db.String)

class Stranger(db.Model):
    __tablename__ = 'Stranger'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    time = db.Column(db.String)
    photourl = db.Column(db.String)


# ====================================================================
from app.account import account as account_blueprint

app.register_blueprint(account_blueprint, url_prefix="/account")
if __name__ == "__main__":
    app.run(debug=True)