angular.module('MyApp').controller('showOrdersCtrl', function ($scope, $http, dataService) {



    (init = function () {

        dataService.showOrders({ table: "orders" }).then(function (result) {
            console.log(result);
            if (result.success) {
                if (result.obj.length === 0) {
                    $scope.orderExist = false;
                } else {
                    $scope.orderExist = true;
                    for (var i = 0; i < result.obj.length; i++) {
                        result.obj[i].FromDate = moment(result.obj[i].FromDate).format("DD/MM/YYYY");
                        result.obj[i].ToDate = moment(result.obj[i].ToDate).format("DD/MM/YYYY");
                    }
                    $scope.orders = result.obj;
                }
            }
        })
    })();
    $scope.deleteOrder = function (item) {
        dataService.deleteOrder({ id: item.ID , carId: item.carId }).then(function (result) {
            if (result.success)
                location.reload();
            else
                alert("An error occurred, please try again");
        })
    }
});