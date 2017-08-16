angular.module('MyApp').controller('statusCtrl', function ($scope, $http, dataService) {


    $scope.carList = true;

    (init = function () {
        $scope.CarData = {
            type: '',
            seats: '',
            doors: '',
            air_cond: '',
            transmission: ''
        };

        $scope.displayForm = 'false';
        $scope.CreateNewButton = "Add new car to list";
        dataService.showStatus({ table: "carsTable" }).then(function (result) {
            if (result.success) {
                if (result.obj.length === 0) {
                    $scope.carList = false;
                } else {
                    $scope.carList = true;
                    $scope.cars = result.obj;
                }
            }
        })
    })();
    $scope.showForm = function () {
        if ($scope.CreateNewButton === "Add new car to list") {
            $scope.displayForm = 'true';
            $scope.CreateNewButton = "Close";
        } else {
            $scope.displayForm = 'false';
            $scope.CreateNewButton = "Add new car to list";
        }

    }
    $scope.AddNewCar = function () {
        var dataToSend = {
            Type: $scope.CarData.type,
            Seats: $scope.CarData.seats,
            Air_Cond: $scope.CarData.air_cond,
            Doors: $scope.CarData.doors,
            Transmission: $scope.CarData.transmission,
            available: "Yes",
            table: "carsTable"
        };
        dataService.newCar({ data: dataToSend }).then(function (result) {
            if (result.success)
                location.reload();
            else
                alert("Some Error, please try again");
        });
    }
    $scope.removeCar = function (item) {
        dataService.removeCar({ id: item.ID }).then(function (result) {
            if (result.success)
                location.reload();
            else if (result.message)
                alert("This car is with a customer, if you want to delete it from the system please remove it from the order list first");
            else
                alert("Some Error, please try again");

        })
    }
});