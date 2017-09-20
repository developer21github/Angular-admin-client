(function () {
    'use strict';
    angular.module('app')
        .controller('portfolioController', portfolioController);
    /** @injector */
    function portfolioController($state, toastr, bootBoxService, portfolioService) {
        var vm = this;
        vm.portfolio = {};
        vm.addPortfolio = addPortfolio;
        vm.getAllPortfolio = getAllPortfolio;
        vm.deletePortfolio = deletePortfolio;
       // vm.updatePortfolio = updatePortfolio;
        vm.updatePortfolioForm=updatePortfolioForm;
        //vm.getPortfolioById = getPortfolioById;

        function getAllPortfolio() {

            portfolioService.getAllPortfolio().then(function (response) {
                vm.portfolio = angular.copy(response.data);
            }, function (error) {
                toastr.error(error.data.message);
            })
        }

        function addPortfolio(data) {
            if (data._id) {

            } else {
                portfolioService.addPortfolio(data)
                    .then(function (response) {
                        if (response.status === 200) {
                            toastr.success(response.data.message);
                            $state.go('app.portfolioIndex');
                        }
                    }, function (error) {
                        toastr.success(response.data.message);
                    })
            }
        }

        function deletePortfolio(id) {
            bootBoxService.confirmBox("portfolio", function (res) {
                if (res) {
                    portfolioService.deletePortfolio(id)
                        .then(function (response) {
                            toastr.success(response.data.message);
                            vm.getAllPortfolio();
                        }, function (error) {
                            toastr.success(response.data.message);
                        })
                }
            })
            }
        function updatePortfolioForm(id) {
            $state.go('app.portfolioManage', {id: id});
        }

        // init call
        vm.getAllPortfolio();
    }
})()