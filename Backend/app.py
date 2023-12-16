from flask import Flask, request, jsonify
from flask_cors import CORS

from DatabaseHandling.check_and_register import insert_user
from DatabaseHandling.check_login_handler import check_login

app = Flask(__name__)
CORS(app, origins="*")  # DEV ONLY!

@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/login', methods=['POST'])
def login():
    result: list = []
    print("Login Function triggered!")
    content = request.json
    print(content)
    result = check_login(content['Email'], content['Password'])
    if result:
        return jsonify({"status": "success", "message": "Login successful!"})


@app.route('/register', methods=['POST'])
def register():
    content = request.json
    print(content)
    result = insert_user(content['Email'], content['Password'])
    return jsonify(result)
    #return jsonify({"status": "success", "message": "Registration successful!"})



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)


#.venv\Scripts\activate
#python app.py
#mariaDBrootpwd: dbapki
