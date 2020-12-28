import os
from datetime import datetime, timezone

def get_db_stat(path):
    db_list = []
    with os.scandir(path) as entries:
        for entry in entries:
            if ".mdf" in entry.name:
                db_stat = {"db": entry.name,
                        "size": (os.path.getsize(f"{path}/{entry.name}"))/1024**2, "time": str(datetime.now(timezone.utc))}
                db_list.append(db_stat)
    print(db_list)
