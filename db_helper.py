import sqlite3
from sqlite3 import Error, Connection


def get_sqlconnection():
    """
    Get sql connection for sqlite
    """
    try:
        con = sqlite3.connect('dbmonitor.db')
        print("Connection is established: Database is created.")
    except Error as DbError:
        print(DbError)
    finally:
        con.close()


def create_table(con: Connection) -> Connection:
    """
    Create a database to store the databases to be monitored
    """
    db_cursor = con.cursor()
    sql_script = """ CREATE TABLE IF NOT EXISTS db_monitor
        (id text PRIMARY KEY,
         name text,
         size float, 
         monitor_time  text)"""
    db_cursor.execute(sql_script)
    con.commit()


def insert_record(con, data):
    """
    Insert 
    """
    pass


def get_records(con):
    """
    Get a list of records
    """
    
