from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*")  # DEV ONLY!

@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/login', methods=['POST'])
def login():
    print("Login Function triggered!")
    content = request.json
    print(content)
    if content['Email'] == 'email' and content['Password'] == 'password':
        return jsonify({"status": "success", "message": "Login successful!"})


if __name__ == "__main__":
    app.run(host="192.168.0.108", port=5000, debug=True)


#.venv\Scripts\activate
#python app.py
