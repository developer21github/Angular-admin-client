(function () {
    'use strict'
    angular.module('app')
        .config(routConfig);

    routConfig.$inject=['$stateProvider', '$urlRouterProvider'];
    
    function routConfig($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('app',{
                url: '/home',
                templateUrl:'../admin/index.html'
            })
    }
})();