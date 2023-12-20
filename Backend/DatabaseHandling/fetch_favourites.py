from .utils import connect_to_database
import json


def fetch_favourites():
    conn = connect_to_database()
    cur = conn.cursor()

    cur.execute("""
        SELECT
            fi.favourite_item_id,
            dc.name AS default_coffee,
            fi.sweetner_type,
            fi.sweetner_amount,
            fi.creamer_type,
            fi.creamer_amount,
            fi.additive_1,
            fi.additive_2,
            fi.additive_3
        FROM favourite_items fi
        INNER JOIN default_coffees dc ON fi.default_coffee = dc.default_coffee_id
    """)

    data = []

    for (
            favourite_item_id,
            default_coffee,
            sweetener_type,
            sweetener_amount,
            creamer_type,
            creamer_amount,
            additive_1,
            additive_2,
            additive_3,
    ) in cur:
        item = {
            "favourite_item_id": favourite_item_id,
            "default_coffee": default_coffee,
            "sweetener_type": sweetener_type,
            "sweetener_amount": sweetener_amount,
            "creamer_type": creamer_type,
            "creamer_amount": creamer_amount,
            "additive_1": additive_1,
            "additive_2": additive_2,
            "additive_3": additive_3,
        }
        data.append(item)

    jsonData = json.dumps(data)
    conn.close()
    print(data)
    return jsonData
