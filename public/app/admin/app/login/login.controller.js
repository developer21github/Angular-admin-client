(function () {
    'use strict';
    angular.module('app')
        .controller('loginController', loginController);

    /** @Injector */
    function loginController($state, loginService) {
        var vm = this;

        vm.login = login;

        function login(data) {
            debugger;
            loginService.login(data).then(function (responce) {
                debugger
                if(responce.status==200)
                 $state.go('app.dashboard');
                else
                    toastr.success(responce.data.message)
            },function (error) {
                debugger
                toastr.error(error.data.message)
            })

        }
    }
})();