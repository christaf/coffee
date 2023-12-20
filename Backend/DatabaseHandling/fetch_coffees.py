from .utils import connect_to_database
import json


def fetch_coffees():

    conn = connect_to_database()
    cur = conn.cursor()

    cur.execute("SELECT * FROM default_coffees")
    data = []

    for (default_coffee_id, name, bean_type, brewing_type, photo_url, price) in cur:
        item = {"default_coffee_id": default_coffee_id, "name": name, "bean_type": bean_type,
                "brewing_type": brewing_type, "photo_url": photo_url}
        data.append(item)

    print(data)
    jsonData = json.dumps(data)
    conn.commit()
    conn.close()
    print(data)
    return jsonData
