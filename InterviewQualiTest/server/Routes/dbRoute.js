var router = require('express').Router();
var client = require('../utils/clientUtils');
var dbUtils = require('../utils/dbUtils');
var httpStatus = require('http-status-codes');



router.post('/showStatus', function (request, response) {

    var data = JSON.parse(request.body.data);
    dbUtils.showStatus(data, function (error, result) {
        if (error) {
            client.sendErrorResponse(response, error, httpStatus.INTERNAL_SERVER_ERROR);
        }
        else if (result.success) {
            client.sendObjectResponse(response, result);
        }
        else {
            client.sendObjectResponse(response, result);
        }
    }
    );
});
router.delete('/showStatus', function (request, response) {

    var data = JSON.parse(request.body.data);
    dbUtils.showStatus(data, function (error, result) {
        if (error) {
            client.sendErrorResponse(response, error, httpStatus.INTERNAL_SERVER_ERROR);
        }
        else if (result.success) {
            client.sendObjectResponse(response, result);
        }
        else {
            client.sendObjectResponse(response, result);
        }
    }
    );
});
router.post('/showAvailable', function (request, response) {

    var data = JSON.parse(request.body.data);
    dbUtils.showAvailable(data, function (error, result) {
        if (error) {
            client.sendErrorResponse(response, error, httpStatus.INTERNAL_SERVER_ERROR);
        }
        else if (result.success) {
            client.sendObjectResponse(response, result);
        }
        else {
            client.sendObjectResponse(response, result);
        }
    }
    );
});
router.post('/newOrder', function (request, response) {

    var data = JSON.parse(request.body.data);
    dbUtils.newOrder(data, function (error, result) {
        if (error) {
            client.sendErrorResponse(response, error, httpStatus.INTERNAL_SERVER_ERROR);
        }
        else if (result.success) {
            client.sendObjectResponse(response, result);
        }
        else {
            client.sendObjectResponse(response, result);
        }
    }
    );
});
router.post('/showOrders', function (request, response) {

    var data = JSON.parse(request.body.data);
    dbUtils.showOrders(data, function (error, result) {
        if (error) {
            client.sendErrorResponse(response, error, httpStatus.INTERNAL_SERVER_ERROR);
        }
        else if (result.success) {
            client.sendObjectResponse(response, result);
        }
        else {
            client.sendObjectResponse(response, result);
        }
    }
    );
});
router.post('/newCar', function (request, response) {

    var data = JSON.parse(request.body.data);
    dbUtils.newCar(data, function (error, result) {
        if (error) {
            client.sendErrorResponse(response, error, httpStatus.INTERNAL_SERVER_ERROR);
        }
        else if (result.success) {
            client.sendObjectResponse(response, result);
        }
        else {
            client.sendObjectResponse(response, result);
        }
    }
    );
});
router.delete('/removeCar', function (request, response) {

    var data = JSON.parse(request.query.data);
    dbUtils.removeCar(data, function (error, result) {
        if (error) {
            client.sendErrorResponse(response, error, httpStatus.INTERNAL_SERVER_ERROR);
        }
        else if (result.success) {
            client.sendObjectResponse(response, result);
        }
        else {
            client.sendObjectResponse(response, result);
        }
    }
    );
});
router.delete('/deleteOrder', function (request, response) {

    var data = JSON.parse(request.query.data);
    dbUtils.deleteOrder(data, function (error, result) {
        if (error) {
            client.sendErrorResponse(response, error, httpStatus.INTERNAL_SERVER_ERROR);
        }
        else if (result.success) {
            client.sendObjectResponse(response, result);
        }
        else {
            client.sendObjectResponse(response, result);
        }
    }
    );
});
module.exports = router;
