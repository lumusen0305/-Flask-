from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://pguhbdjcadenyh:5724176d79b7afd98ddbe7cbe390dabfa40f0de1f0745468dc67f6eda2c1697b@ec2-3-234-109-123.compute-1.amazonaws.com:5432/d4v5kaf1e8vg2l'
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.sqlite"


db = SQLAlchemy(app)
migrate = Migrate(app, db)

manager = Manager(app)
manager.add_command('db', MigrateCommand)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)

if __name__ == '__main__':
    manager.run()