from flask import Flask, request, jsonify
from flask_cors import CORS

from DatabaseHandling.fetch_coffees import fetch_coffees
from DatabaseHandling.check_login_handler import check_login
from DatabaseHandling.check_and_register import insert_user
from DatabaseHandling.utils import read_config

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


@app.route('/coffee_list', methods=['POST'])
def get_coffee_list():
    content = request.json
    print(content)
    result = fetch_coffees()
    #print(result[1])
    #print(result[2])
    #print(result[3])
    #return jsonify(result[0])
    return jsonify(result)
    #return result
    #return jsonify(['Cappuccino', 'Espresso', 'Latte', 'Mocha'])

if __name__ == "__main__":
    _, server_config = read_config()
    app.run(host=server_config['host'], port=server_config['port'], debug=True)

# .venv\Scripts\activate
# python app.py
# mariaDBrootpwd: dbapki
