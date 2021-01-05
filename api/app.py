from flask import Flask, jsonify, send_from_directory, send_file
from flask_cors.decorator import cross_origin
from os import path, getcwd
import db_helper as helper


app = Flask(__name__)


@app.route('/api/monitor')
@cross_origin()
def index():
    """
    testing falsk api
    """
    con = helper.get_sqlconnection()
    result = helper.get_all_records(con)
    helper.close_connection(con)
    helper.add_record_to_excel(result)
    if result == None:
        return jsonify({"count": 0, "data": []})
    else:
        return jsonify({"count": len(result), "data": result})


@app.route('/api/download')
@cross_origin()
def download():
    current_dir = getcwd()
    # parent_dir = path.dirname(current_dir)
    return send_file(current_dir + '/dbmonitor.xlsx', mimetype='application/x-xlsx', attachment_filename='summary_report.csv', as_attachment=True)


app.run(debug=True)
