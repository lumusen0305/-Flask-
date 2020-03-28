from . import account

@account.route('/register' , methods=['GET'])
def register():
    return "HI"
@account.route('/check' , methods=['POST'])
def check():
    return "HI"