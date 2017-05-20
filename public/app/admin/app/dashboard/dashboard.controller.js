(function () {
    'use strict'
    angular.module('app')
        .controller('dashboardController',dashboardController);

    function dashboardController() {
         var vm=this;
        vm.hello="welcome to hello";
    }
})();