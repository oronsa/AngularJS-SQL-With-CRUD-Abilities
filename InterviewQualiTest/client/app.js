angular.module('MyApp', ['ui.router', 'ngResource', 'ngMaterial', 'ngResource', 'ngAnimate', 'ngAria', 'ui.bootstrap', 'ngMessages'])
     //convert the moment on date picker to dd-mm-yyyy format
    .config(function ($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function (date) {
        if (!date) {
            return '';
        }
        return moment(date).format('DD-MM-YYYY');
    }
});