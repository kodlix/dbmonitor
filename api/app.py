from flask import Flask, jsonify
import db_helper as helper


app = Flask(__name__)

@app.route('/api/monitor')
def index():
    """
    testing falsk api
    """
    con = helper.get_sqlconnection()
    result = helper.get_all_records(con)
    helper.close_connection(con)
    if result == None:
        return jsonify({"count": 0, "data": []})
    else:
        return jsonify({"count": len(result), "data": result})

app.run(debug=True)
