import mariadb
import sys


def check_login(email, password):
    data: list = []
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
    cur.execute("SELECT * FROM user WHERE email = ? AND password = ?", (email, password))
    for (user_id, customer_id, email, password) in cur:
        data.append(customer_id)
        print(f"user_id: {user_id}, customer_id: {customer_id}, email: {email}, password: {password}")
    conn.commit()
    conn.close()
    print(data)
    return data
