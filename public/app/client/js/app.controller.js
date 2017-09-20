(function () {
    "use strict";
    angular.module('appClient')
        .controller('appCtrl', appCtrl)
        .service('appService', appService);
    appCtrl.$inject = ['appService'];
    appService.$inject = ['$http'];
    function appCtrl(appService) {
        var vm = this;
        /**vm functions*/
        vm.getPortFolio = getPortFolio;
        vm.getTestimonial=getTestimonial;
        function getPortFolio() {
            appService.getAllPortfolio()
                .then(function (res) {
                    vm.portfolio = angular.copy(res.data.data);
                })
                .catch(function (err) {

                })
        }

        function getTestimonial() {
            appService.getAllTestimonials()
                .then(function (res) {
                    vm.testimonial = angular.copy(res.data)
                })
                .catch(function (err) {
                })
        }

        /**init*/
        vm.getPortFolio();
        vm.getTestimonial();
    }

    function appService($http) {
        var service = {
            getAllPortfolio: getAllPortfolio,
            getAllTestimonials:getAllTestimonials

        };
        return service;

        function getAllPortfolio() {
            return $http.get('http://localhost:4040/portfolio');
        }
        function getAllTestimonials() {
            return $http.get('http://localhost:4040/testimonial');
        }

    }
})();