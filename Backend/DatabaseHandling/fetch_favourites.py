from .utils import connect_to_database
import json


def update_favourites(favourite):
    conn = connect_to_database()


def insert_favourites(data):

        conn = connect_to_database()
        try:
            cursor = conn.cursor()

            query = """
                INSERT INTO favourite_items (
                    default_coffee,
                    sweetner_type,
                    sweetner_amount,
                    creamer_type,
                    creamer_amount,
                    additive_1,
                    additive_2,
                    additive_3
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """

            for item in data:
                values = (
                    item['default_coffee'],
                    item['sweetner_type'],
                    item['sweetner_amount'],
                    item['creamer_type'],
                    item['creamer_amount'],
                    item['additive_1'],
                    item['additive_2'],
                    item['additive_3']
                )

                cursor.execute(query, values)

            conn.commit()
            print("Data inserted successfully!")

        finally:
            conn.close()



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
            sweetner_type,
            sweetner_amount,
            creamer_type,
            creamer_amount,
            additive_1,
            additive_2,
            additive_3,
    ) in cur:
        item = {
            "favourite_item_id": favourite_item_id,
            "default_coffee": default_coffee,
            "sweetner_type": sweetner_type,
            "sweetner_amount": sweetner_amount,
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
