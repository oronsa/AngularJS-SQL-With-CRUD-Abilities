angular.module('MyApp').controller('newOrderCtrl', function ($scope, $state, dataService) {


    // valid regex for email expression
    $scope.regexMail = /(^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$)/;
    //init function
    (init = function () {

        dataService.showAvailable({ table: "carstable", where: " where available = 'yes' " }).then(function (result) {
            if (result.success) {
                if (result.obj.length === 0) {
                    //Disable create button
                    alert("There are currently no available vehicles in the system");
                    angular.element(document.getElementsByName('submitButton'))[0].disabled = true;

                } else {
                    $scope.Cars = result.obj;
                }
            }
        })
    })();
    $scope.CreateNewOrder = function () {
        if (!$scope.customerData.selectedCar) {

            alert("you must to choose a car");
            return;
        }
        else if (!$scope.customerData.fromDate || !$scope.customerData.toDate) {
            alert("from and to date are required");
        } else {
            var dataToSend = {
                carId:$scope.customerData.selectedCar.ID,
                car: $scope.customerData.selectedCar.CarName,
                name: $scope.customerData.name,
                email: $scope.customerData.email,
                fromDate: $scope.customerData.fromDate,
                toDate: $scope.customerData.toDate,
                phone: $scope.customerData.phone,
                table: "orders"
            };
            dataService.newOrder({ data: dataToSend }).then(function (result) {
                if (result.success) {
                    alert("Success, press Ok to continue");
                    $state.go('showOrders');
                } else {
                    alert("An error occurred, please try again");
                }
            });
                
        }
    }

});