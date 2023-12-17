import mariadb
import sys
from configparser import ConfigParser


def read_config():
    config = ConfigParser()
    config.read('config.ini')

    db_config = {
        'host': config.get('Database', 'host'),
        'port': config.getint('Database', 'port'),
        'user': config.get('Database', 'user'),
        'password': config.get('Database', 'password'),
        'database': config.get('Database', 'database')
    }

    server_config = {
        'host': config.get('Server', 'host'),
        'port': config.getint('Server', 'port')
    }

    return db_config, server_config


# Function to establish a database connection
def connect_to_database():
    db_config, _ = read_config()
    try:
        conn = mariadb.connect(**db_config)
        print("MariaDB Platform Connected Successfully!")
        return conn
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        sys.exit(1)

