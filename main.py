from api import db_helper
from dbmonitor import core


if __name__ == "__main__":
    #print(helpers.get_answer())
    entries = core.get_db_stat('C:/Program Files/Microsoft SQL Server/MSSQL12.MSSQLSERVER/MSSQL/DATA/')
    connection = db_helper.get_sqlconnection()
    db_helper.create_table(connection)
    db_helper.insert_record(connection, entries)
    db_helper.close_connection(connection)
    # print(db_helper.get_sqlconnection())
    # print("working")