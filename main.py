from dbmonitor import helpers, core
import db_helper


if __name__ == "__main__":
    #print(helpers.get_answer())
    #core.get_db_stat('C:/Program Files/Microsoft SQL Server/MSSQL12.MSSQLSERVER/MSSQL/DATA/')
    print(db_helper.get_sqlconnection())
    print("working")