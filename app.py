from app import app

@app.route('/')
def index():
    return "JdI"
if __name__ == "__main__":
    app.run(debug=True)