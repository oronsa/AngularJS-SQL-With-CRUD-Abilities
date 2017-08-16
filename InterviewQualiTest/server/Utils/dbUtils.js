var sqlUtils = require('./sqlUtils');
var moment = require('moment');


module.exports = {

    //Shows all the vehicles in the company and their status
    showStatus: function (data, callBack) {
        var query = "select * from " + data.table;
        sqlUtils.query(query, function (error, result) {
            if (error) {
                callBack(error, null);
            }
            if (result) {
                callBack(null, { obj: result, success: true });
            }
        })
    },
    //Show us only the available vehicles in th company
    showAvailable: function (data, callBack) {
        var query = "select * from " + data.table + data.where;
        sqlUtils.query(query, function (error, result) {
            if (error) {
                callBack(error, null);
            }
            if (result) {
                callBack(null, { obj: result, success: true });
            }
        })
    },
    //create a new order on database and make the current vehicles to non available
    newOrder: function (data, callBack) {
        var fromDate = moment(data.data.fromDate).format("YYYY-MM-DD");
        var toDate = moment(data.data.toDate).format("YYYY-MM-DD");

        var query1 = "INSERT INTO " + data.data.table + " (CarId,CarName,CustomerName,EmailAddress,FromDate,ToDate,PhoneNumber) VALUES (" + "'" + data.data.carId
            + "','" + data.data.car+"','"+data.data.name + "','" + data.data.email + "','" + fromDate + "','" + toDate + "','" + data.data.phone + "'" + ")";

        sqlUtils.insert(query1, function (error, result) {
            if (error) {
                callBack(error, null);
            }
            if (result) {
                var query2 = "UPDATE carsTable SET Available='No' WHERE CarName='" + data.data.car + "'";

                sqlUtils.update(query2, function (error, result) {
                    if (error) {
                        callBack(error, null);
                    }
                    if (result) {
                        callBack(null, { obj: result, success: true });
                    }
                })
            }
        })
    },
    showOrders: function (data, callBack) {
        var query = "select * from " + data.table;
        sqlUtils.query(query, function (error, result) {
            if (error) {
                callBack(error, null);
            }
            if (result) {
                callBack(null, { obj: result, success: true });
            }
        })
    },
    newCar: function (data, callBack) {

        //TODO:Check if there is not same car that exist in our db
        var query = "INSERT INTO " + data.data.table + " (CarName,Seats,Air_Cond,Doors,Transmission,Available	) VALUES (" + "'" + data.data.Type
            + "','" + data.data.Seats + "','" + data.data.Air_Cond + "','" + data.data.Doors + "','" +
            data.data.Transmission + "','" + data.data.available + "'" + ")";
        sqlUtils.query(query, function (error, result) {
            if (error) {
                callBack(error, null);
            }
            if (result) {
                callBack(null, { obj: result, success: true });
            }
        })
    },
    removeCar: function (data, callBack) {

        //first we check if the car is order by someone
        var query1 = "select * from orders where carId = " + data.id;
        sqlUtils.query(query1, function (error, result) {
            if (error) {
                callBack(error, null);
            }
            if (result.length > 0 ) {
                callBack(null, { message: "order car", success: false });
            } else {
                var query2 = "DELETE FROM carsTable where ID=" + data.id;
                sqlUtils.query(query2, function (error, result) {
                    if (error) {
                        callBack(error, null);
                    }
                    if (result) {
                        callBack(null, { obj: result, success: true });
                    }
                })
            }
        })


    },
    deleteOrder: function (data, callBack) {

        //TODO:Check if there is not same car that exist in our db
        var query1 = "DELETE FROM Orders where ID=" + data.id;
        sqlUtils.query(query1, function (error, result) {
            if (error) {
                callBack(error, null);
            }
            if (result) {
                var query2 = "UPDATE carsTable SET Available='Yes' WHERE ID='" + data.carId + "'";

                sqlUtils.update(query2, function (error, result) {
                    if (error) {
                        callBack(error, null);
                    }
                    if (result) {
                        callBack(null, { obj: result, success: true });
                    }
                })
            }
        })
    }
}