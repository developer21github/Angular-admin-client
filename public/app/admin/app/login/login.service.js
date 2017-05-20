(function () {
    'use strict';
    angular.module('app')
        .service('loginService', loginService)

    /** @injector */
    function loginService($http, webservice) {

        var service = {
            login: login
        }
        return service;

        function login(data) {
            return $http.post({url:webservice.api + '/auth/login',
                data:data});
        }
    }

})();