import os
from datetime import datetime, timezone
import uuid


def get_db_stat(path):
    db_list = []
    db_stat = dict()
    with os.scandir(path) as entries:
        for entry in entries:
            if ".mdf" in entry.name:
                db_stat = {"id": str(uuid.uuid4()),
                           "name": entry.name,
                           "size": (os.path.getsize(f"{path}/{entry.name}"))/1024**2,
                           "monitor_time": datetime.now(timezone.utc)}
                db_list.append((db_stat["id"], db_stat["name"], db_stat["size"], db_stat["monitor_time"]))
    print(db_stat)
    return db_list