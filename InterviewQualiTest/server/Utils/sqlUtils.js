var sql = require('mysql');

var connection = sql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sampleDB'
});

module.exports = {

    connect: function (callback) {

        connection.connect(function (error) {
            if (error) {
                console.log(error);
                callback(error);
            }

            else
                console.log("connected");
        });
    },
    query: function (query, callback) {
        connection.query(query, function (error, rows, fields) {
            if (error)
                callback(error, null);
            else {
                console.log(rows);
                callback(null, rows);
            }
        });

    },
    insert: function (query, callback) {

        connection.query(query, function (error, result) {
            if (error)
                callback(error, null);
            else {
                callback(null, result)
            }
        });
    },
    update: function (query, callback) {

        connection.query(query, function (error, result) {
            if (error)
                callback(error, null);
            else {
                callback(null, result)
            }
        });
    }
}