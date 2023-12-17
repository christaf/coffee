import mariadb
import sys


def fetch_coffees():
    data: list = [[] for i in range(4)]  # [[], [], [], []]
    try:
        conn = mariadb.connect(
            host="localhost",
            port=3306,
            user="root",
            password="dbapki",
            database="apkidb")
        print("MariaDB Platform Connected Successfully!")
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        sys.exit(1)
    cur = conn.cursor()
    cur.execute("SELECT * FROM default_coffees")
    print(cur)
    for (default_coffee_id, name, bean_type, brewing_type, photo_url) in cur:
        data[0].append(name)
        data[1].append(bean_type)
        data[2].append(brewing_type)
        data[3].append(photo_url)
    conn.commit()
    conn.close()
    print(data)
    return data
