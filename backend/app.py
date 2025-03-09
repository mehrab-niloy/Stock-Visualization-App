from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
#This is json model
data = [
    {"date": "2020-08-10", "trade_code": "1JANATAMF", "high": "4.3", "low": "4.1", "open_t": "4.2", "close_t": "4.1", "volume": "2,285,416"},
    {"date": "2020-08-09", "trade_code": "1JANATAMF", "high": "4.3", "low": "4.1", "open_t": "4.1", "close_t": "4.2", "volume": "1,292,933"},
    # Add more data here
]

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(data)


# This is  sql model
"""
import pyodbc

conn = pyodbc.connect(
    'DRIVER={ODBC Driver 17 for SQL Server};'
    'SERVER=LAPTOP-D9TE5JB3\\SQLEXPRESS;'
    'DATABASE=StockDatabase;'
    'Trusted_Connection=yes;'
)
@app.route('/api/data', methods=['GET'])
def get_data():
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM StockData')
    rows = cursor.fetchall()
    data = [dict(zip([column[0] for column in cursor.description], row)) for row in rows]
    return jsonify(data)  """

if __name__ == '__main__':
    app.run(debug=True)