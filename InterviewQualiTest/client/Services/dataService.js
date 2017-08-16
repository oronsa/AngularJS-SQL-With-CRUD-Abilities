angular.module('MyApp')

    .factory('dataService', function ($resource, $q) {

        var baseUrl = 'api/database';

        function showStatus(data) {
            var deferred = $q.defer();
            $resource(baseUrl + '/showStatus').save({data: JSON.stringify(data)}, function (result, error) {
                deferPromise(deferred, result, error);
            });
            return deferred.promise;
        }


        function showAvailable(data) {
            var deferred = $q.defer();
            $resource(baseUrl + '/showAvailable').save({ data: JSON.stringify(data) }, function (result, error) {
                deferPromise(deferred, result, error);
            });
            return deferred.promise;
        }
        function newOrder(data) {
            var deferred = $q.defer();
            $resource(baseUrl + '/newOrder').save({ data: JSON.stringify(data) }, function (result, error) {
                deferPromise(deferred, result, error);
            });
            return deferred.promise;
        }
        function showOrders(data) {
            var deferred = $q.defer();
            $resource(baseUrl + '/showOrders').save({ data: JSON.stringify(data) }, function (result, error) {
                deferPromise(deferred, result, error);
            });
            return deferred.promise;
        }
        function newCar(data) {
            var deferred = $q.defer();
            $resource(baseUrl + '/newCar').save({ data: JSON.stringify(data) }, function (result, error) {
                deferPromise(deferred, result, error);
            });
            return deferred.promise;
        }
        function removeCar(data) {
            var deferred = $q.defer();
            $resource(baseUrl + '/removeCar').remove({ data: JSON.stringify(data) }, function (result, error) {
                deferPromise(deferred, result, error);
            });
            return deferred.promise;
        }
        function deleteOrder(data) {
            var deferred = $q.defer();
            $resource(baseUrl + '/deleteOrder').remove({ data: JSON.stringify(data) }, function (result, error) {
                deferPromise(deferred, result, error);
            });
            return deferred.promise;
        }
           
        return {
            showStatus: showStatus,
            showAvailable: showAvailable,
            newOrder: newOrder,
            showOrders: showOrders,
            newCar: newCar,
            removeCar: removeCar,
            deleteOrder: deleteOrder
        };

        function deferPromise(deferred, result, error) {
            if (result) {
                deferred.resolve(result);
            }
            else {
                deferred.reject(error);
            }
        }
    });