angular.module('MyApp').

    config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/Views/home.html',
                controller: 'homeCtrl'
            })
            .state('newOrder', {
                url: '/newOrder',
                templateUrl: '/Views/newOrder.html',
                controller: 'newOrderCtrl'
            })
            .state('showOrders', {
                url: '/showOrders',
                templateUrl: '/Views/showOrders.html',
                controller: 'showOrdersCtrl'
            })
               .state('status', {
                url: '/status',
                templateUrl: '/Views/status.html',
                controller: 'statusCtrl'
            });
    });