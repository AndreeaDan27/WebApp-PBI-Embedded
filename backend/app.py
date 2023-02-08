from flask import Flask, jsonify

from flask_cors import CORS

app = Flask(__name__)
CORS(app)



@app.route('/', methods = ['GET'])
def get_articles():
    return jsonify({"Hello":"World"})



@app.route('/report1', methods = ['GET'])
def get_report1():
     return jsonify({"You see":"REPORT 1"})

@app.route('/report2', methods = ['GET'])
def get_report2():
     return jsonify({"You see":"REPORT 2"})

if __name__ == '__main__':
    app.run(debug=True)