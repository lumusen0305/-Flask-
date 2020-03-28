from . import account

@account.route('/register' , methods=['GET'])
def index():
    return "HI"