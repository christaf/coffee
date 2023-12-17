from .utils import connect_to_database


def check_login(email, password):
    data: list = []

    conn = connect_to_database()
    cur = conn.cursor()

    cur.execute("SELECT * FROM user WHERE email = ? AND password = ?", (email, password))
    for (user_id, customer_id, email, password) in cur:
        data.append(customer_id)
        print(f"user_id: {user_id}, customer_id: {customer_id}, email: {email}, password: {password}")
    conn.commit()
    conn.close()
    print(data)
    return data
