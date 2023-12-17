from .utils import connect_to_database
import json


def fetch_coffees():
    #data: list = [[] for i in range(4)]  # [[], [], [], []]

    # try:
    #    conn = mariadb.connect(
    #        host="localhost",
    #        port=3306,
    #        user="root",
    #        password="dbapki",
    #        database="apkidb")
    #    print("MariaDB Platform Connected Successfully!")
    # except mariadb.Error as e:
    #    print(f"Error connecting to MariaDB Platform: {e}")
    #    sys.exit(1)

    conn = connect_to_database()
    cur = conn.cursor()

    cur.execute("SELECT * FROM default_coffees")
    print(cur)

    #for (default_coffee_id, name, bean_type, brewing_type, photo_url) in cur:
    #    data.append({"default_coffee_id": default_coffee_id})
    #    data.append({"name": name})
    #    data.append({"bean_type": bean_type})
    #    data.append({"brewing_type": brewing_type})
    #    data.append({"photo_url": photo_url})

    data = []
    #for (default_coffee_id, name, bean_type, brewing_type, photo_url) in cur:
    #for (default_coffee_id) in cur:
    #    header = {"default_coffee_id", default_coffee_id}
    #    item = []
    #    for (name, bean_type, brewing_type, photo_url) in cur:
    #        item = {"name": name}
    #        item["bean_type"] = bean_type
    #        item["brewing_type"] = brewing_type
    #        item["photo_url"] = photo_url
    #    header.append(item)

        #item = {"default_coffee_id": default_coffee_id}
        #item["default_coffee_id"] = default_coffee_id
        #item["name"] = name
        #item["bean_type"] = bean_type
        #item["brewing_type"] = brewing_type
        #item["photo_url"] = photo_url
        #for attribute in attributes_selected:
        #    if attribute.feature == feature:
        #        item[attribute.attribute.name] = attribute.value
        #data.append(item)

    for (default_coffee_id, name, bean_type, brewing_type, photo_url) in cur:
        item = {"default_coffee_id": default_coffee_id}
        item["name"] = name
        item["bean_type"] = bean_type
        item["brewing_type"] = brewing_type
        item["photo_url"] = photo_url
        data.append(item)

    jsonData = json.dumps(data)
    conn.commit()
    conn.close()
    #print(data[0])
    #print("jsonData:", jsonData.name)
    return jsonData
