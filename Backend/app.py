from flask import Flask, request, jsonify
from flask_cors import CORS

from DatabaseHandling.fetch_coffees import fetch_coffees
from DatabaseHandling.check_login_handler import check_login
from DatabaseHandling.check_and_register import insert_user
from DatabaseHandling.fetch_favourites import fetch_favourites, update_favourites, insert_favourites
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
    # if result:
    return jsonify({"status": "success", "message": "Login successful!"})


@app.route('/register', methods=['POST'])
def register():
    content = request.json
    print(content)
    result = insert_user(content['Email'], content['Password'])
    return jsonify(result)
    # return jsonify({"status": "success", "message": "Registration successful!"})


@app.route('/coffee_list', methods=['POST'])
def get_coffee_list():
    content = request.json
    print(content)
    result = fetch_coffees()
dzionselka
    return jsonify(result)


@app.route('/favourites', methods=['POST'])
def get_favourite_list():
    content = request.json
    print(content)
    result = fetch_favourites()

    return jsonify(result)


@app.route('/add_favourite', methods=['PUT'])
def add_favourite(content):
    content = [
        {'favourite_item_id': 15, 'default_coffee': 25, 'sweetner_type': 'Sugar', 'sweetner_amount': 1,
         'creamer_type': 'Milk', 'creamer_amount': 3, 'additive_1': 'Cinnamon', 'additive_2': 'Vanilla extract',
         'additive_3': 'Whipped cream'},
        {'favourite_item_id': 23, 'default_coffee': 24, 'sweetner_type': 'Honey', 'sweetner_amount': 2,
         'creamer_type': 'Almond milk', 'creamer_amount': 3, 'additive_1': 'Caramel syrup', 'additive_2': 'Nutmeg',
         'additive_3': 'None'},
        {'favourite_item_id': 523, 'default_coffee': 26, 'sweetner_type': 'Stevia', 'sweetner_amount': 1,
         'creamer_type': 'Soy milk', 'creamer_amount': 3, 'additive_1': 'Hazelnut syrup',
         'additive_2': 'Chocolate powder', 'additive_3': 'Whipped cream'}
    ]
    # request.json
    print(content)
    result = insert_favourites(content)

    return jsonify(result)


discounts = ['10%', '20%', 'Free Coffee', '15%', 'No Discount', '25%']


@app.route('/discounts', methods=['GET'])
def get_discounts():
    return jsonify(discounts)


if __name__ == "__main__":
    _, server_config = read_config()
    app.run(host=server_config['host'], port=server_config['port'], debug=True)

# .venv\Scripts\activate
# python app.py
# mariaDBrootpwd: dbapki
