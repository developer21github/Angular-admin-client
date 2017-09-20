(function () {
     'use strict';
    angular.module('app')
        .service('portfolioService',portfolioService);

    /** @injector */
    function portfolioService($http, Upload, webservice ) {

        var service={
            addPortfolio:addPortfolio,
            deletePortfolio:deletePortfolio,
            updatePortfolio:updatePortfolio,
            getAllPortfolio:getAllPortfolio,
            getPortfolioById:getPortfolioById
        }
        return service;

        function getPortfolioById(id) {
            return $http.get(webservice.api+'/portfolio/'+id);
        }

        function getAllPortfolio() {
             return $http.get(webservice.api+'/portfolio');
        }

        function deletePortfolio(id) {
            return $http.delete(webservice.api+'/portfolio/'+id);
        }

        function addPortfolio(portfolio) {
            return Upload.upload({
                method: 'POST',
                url: webservice.api + '/portfolio',
                data: portfolio
            });
        }

        function updatePortfolio(portfolio) {
            return Upload.upload({
                method: 'PUT',
                url: webservice.api + '/portfolio/'+ portfolio._id,
                data: portfolio
            });
        }

    }
})();