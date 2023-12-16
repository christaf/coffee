import mariadb
import sys


def check_if_already_registered(email):
    user_id = None
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
    cur.execute("SELECT * FROM user WHERE email = ?", (email,))
    for (user_id, customer_id, email, password) in cur:
        print(f"user_id: {user_id}, customer_id: {customer_id}, email: {email}, password: {password}")
    conn.commit()
    conn.close()
    if user_id:
        return True
    else:
        return False


def insert_user(email, password):
    if not (check_if_already_registered(email)):
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
        cur.execute("INSERT INTO address (country) VALUES ('Your_Country')")
        cur.execute("INSERT INTO customers (address_id, customer_name) VALUES (LAST_INSERT_ID(),'Your_name')")
        cur.execute("INSERT INTO user (customer_id, email, password) VALUES (LAST_INSERT_ID(), ?, ?)", (email, password))
        conn.commit()
        conn.close()
        return {"status": "success", "message": "Registration successful!"}
    else:
        return {"status": "failure", "message": "Email is already in use!"}
