// app.js
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('#', {
          url: '/home',
          templateUrl: 'partials/home.html'
        })

        .state('health', {
            url: '/health',
            templateUrl: 'partials/health.html',
            controller: function($scope, $http) {
              //$http.get('data/health.json').then(function onSuccess(response) {
                //$scope.dataset = response.data;
                //console.log("success")
              //}).
              //catch(function onError(response) {
                //console.log(response);
              //});
            }
        })

});
