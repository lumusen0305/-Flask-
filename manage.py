from flask import Flask
from flask_mail import Mail, Message
from threading import Thread
from flask_apscheduler import APScheduler


class Config(object):
    JOBS=[
        {
            'id':'morning',
            'func':'__main__:send_morning',
            'trigger':'cron',
            'hour':8,
            'minute':0
        },
        {
            'id':'lunch',
            'func':'__main__:send_lunch',
            'trigger':'cron',
            'hour':12,
            'minute':0
        },
        {
            'id': 'dinner',
            'func': '__main__:send_dinner',
            'trigger': 'cron',
            'hour': 17,
            'minute': 0
        },
        {
            'id': 'send_last_night_supper',
            'func': '__main__:send_last_night_supper',
            'trigger': 'cron',
            'hour': 0,
            'minute': 45
        }
    ]
# def job_1():   # 一個函式，用來做定時任務的任務。
#     print("HI")

app=Flask(__name__)

app.config.from_object(Config())
from flask_sqlalchemy import SQLAlchemy
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://mstdcfjsudxodu:f143612b550b7065999bd06f4f09ef2156f8edb6d980da4e1e7dc01a2551bf77@ec2-52-71-55-81.compute-1.amazonaws.com:5432/d2ofkbduq9pta0'
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.sqlite"
app.config['MAIL_PORT'] = 465
app.config['MAIL_SUPPRESS_SEND'] = False    # 发送邮件，为True则不发送
app.config['MAIL_SERVER'] = 'smtp.gmail.com'   # 邮箱服务器
app.config['MAIL_USE_SSL'] = True           # 重要，qq邮箱需要使用SSL
app.config['MAIL_USE_TLS'] = False          # 不需要使用TLS
app.config['MAIL_USERNAME'] ='Test890305@gmail.com'
app.config['MAIL_PASSWORD'] ='bobo0305'


db = SQLAlchemy(app)
migrate = Migrate(app, db)
mail = Mail(app)
manager = Manager(app)
manager.add_command('db', MigrateCommand)

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
    def search(self):
        admin = Account.query.filter(Account.username==self.username).first()
        admin.username
        return admin
    def update(self,user_id):
        admin = Account.query.filter(Account.id==user_id).first()
        admin.username=self.username
        admin.password=self.password
        admin.email=self.email
        db.session.commit()
    def check(self):
        result = Account.query.filter(Account.username == self.username).first()
        return result

class url(db.Model):
    __tablename__ = 'url'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    time = db.Column(db.String)
    photourl = db.Column(db.String)
    def __init__(self, time,photourl):
        self.time = time
        self.photourl = photourl
    def add(self):
        db.session.add(self)
        db.session.commit()
    def search(self):
        result = url.query.all()
        result_JSON = []
        for user in result:
            result_JSON.append({"url":user.photourl,"time":user.time})
        print(result_JSON)
        return result_JSON

# =========================email====================================
# 有人闖入
def send_alert():
    msg = Message(subject="Alert",
                  sender=app.config.get("MAIL_USERNAME"),
                  recipients=['fh831.cp9gw@gmail.com'],  # replace with your email for testing
                  body="有人闖入寢室請兄弟們備好榔頭返回據點")
    # 邮件内容会以文本和html两种格式呈现，而你能看到哪种格式取决于你的邮件客户端。
    msg.body = 'sended by flask-email'
    msg.html = '<b>有人闖入寢室請兄弟們備好榔頭返回據點<b>'
    thread = Thread(target=send_async_email, args=[app, msg])
    thread.start()
    return '<h1>邮件发送成功</h1>'

# 早安
def send_morning():
    msg = Message(subject="天狗精靈說：早上好",
                  sender=app.config.get("MAIL_USERNAME"),
                  recipients=['fh831.cp9gw@gmail.com'],  # replace with your email for testing
                  body="生而為人忘記吃飯是不可避免的,天狗精靈提醒您記得吃早餐")
    # 邮件内容会以文本和html两种格式呈现，而你能看到哪种格式取决于你的邮件客户端。
    msg.body = 'sended by flask-email'
    msg.html = '<b>生而為人忘記吃飯是不可避免的,天狗精靈提醒您記得吃早餐<b>'
    thread = Thread(target=send_async_email, args=[app, msg])
    thread.start()
    return '<h1>邮件发送成功</h1>'
# 午安
def send_lunch():
    msg = Message(subject="天狗精靈說：中午好",
                  sender=app.config.get("MAIL_USERNAME"),
                  recipients=['fh831.cp9gw@gmail.com'],  # replace with your email for testing
                  body="生而為人忘記吃飯是不可避免的,天狗精靈提醒您記得吃午餐")
    # 邮件内容会以文本和html两种格式呈现，而你能看到哪种格式取决于你的邮件客户端。
    msg.body = 'sended by flask-email'
    msg.html = '<b>生而為人忘記吃飯是不可避免的,天狗精靈提醒您記得吃午餐<b>'
    thread = Thread(target=send_async_email, args=[app, msg])
    thread.start()
    return '<h1>邮件发送成功</h1>'
# 晚安
def send_dinner():
    msg = Message(subject="天狗精靈說：晚上好",
                  sender=app.config.get("MAIL_USERNAME"),
                  recipients=['fh831.cp9gw@gmail.com'],  # replace with your email for testing
                  body="生而為人忘記吃飯是不可避免的,天狗精靈提醒您記得吃晚餐")
    # 邮件内容会以文本和html两种格式呈现，而你能看到哪种格式取决于你的邮件客户端。
    msg.body = 'sended by flask-email'
    msg.html = '<b>生而為人忘記吃飯是不可避免的,天狗精靈提醒您記得吃晚餐<b>'
    thread = Thread(target=send_async_email, args=[app, msg])
    thread.start()
    return '<h1>邮件发送成功</h1>'
# 宵夜安
def send_last_night_supper():
    msg = Message(subject="天狗精靈說：清晨好",
                  sender=app.config.get("MAIL_USERNAME"),
                  recipients=['fh831.cp9gw@gmail.com'],  # replace with your email for testing
                  body="生而為人忘記吃飯是不可避免的,天狗精靈提醒您記得吃宵夜")
    # 邮件内容会以文本和html两种格式呈现，而你能看到哪种格式取决于你的邮件客户端。
    msg.body = 'sended by flask-email'
    msg.html = '<b>生而為人忘記吃飯是不可避免的,天狗精靈提醒您記得吃宵夜<b>'
    thread = Thread(target=send_async_email, args=[app, msg])
    thread.start()
    return '<h1>邮件发送成功</h1>'
# ====================================================================
def send_async_email(app, msg):
    with app.app_context():
        mail.send(msg)
# ====================================================================
from app.account import account as account_blueprint
from app.websocket import websocket as websocket_blueprint

app.register_blueprint(websocket_blueprint, url_prefix="/websocket")
app.register_blueprint(account_blueprint, url_prefix="/account")


if __name__ == "__main__":
    scheduler=APScheduler()  # 例項化APScheduler
    scheduler.init_app(app)  # 把任務列表放進flask
    scheduler.start() # 啟動任務列表
    app.run(debug=True,host='0.0.0.0')