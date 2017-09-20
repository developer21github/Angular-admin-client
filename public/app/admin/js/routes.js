(function () {
    'use strict';
    angular.module('app')
        .config(routConfig)
        .run(run);
    routConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    run.$inject = ['$state', '$location', '$rootScope'];
    function routConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $urlRouterProvider.otherwise('/Admin/login');

        $stateProvider
            .state('app', {
                abstract: true,
                url: '/Admin',
                templateUrl: 'public/app/admin/layouts/index.html'
            })
            .state('app.dashboard', {
                url: '/dashboard',
                templateUrl: 'public/app/admin/app/dashboard/index.html',
                controller: 'dashboardController',
                controllerAs: 'vm'
            })
            .state('app.testimonialIndex',{
                url:'/testimonial/index',
                templateUrl:'public/app/admin/app/testimonial/index.html',
                controller:'testimonialController',
                controllerAs:'vm'

            })
            .state('app.testimonialManage',{
                url:'/testimonial/manage/:id',
                templateUrl:"public/app/admin/app/testimonial/manage.html",
                controller:'testimonialController',
                controllerAs:'vm'
            })
            .state('app.portfolioIndex',{
                url:'/portfolio/index',
                templateUrl:'public/app/admin/app/portfolio/index.html',
                controller:'portfolioController',
                controllerAs:'vm'

            })
            .state('app.portfolioManage',{
                url:'/portfolio/manage/:id',
                templateUrl:"public/app/admin/app/portfolio/manage.html",
                controller:'portfolioController',
                controllerAs:'vm'
            })
            .state('app.inventory', {
                abstract: true,
                url: '/inventory',
                template: '<ui-view></ui-view>'
            })
            .state('app.inventory.page1', {
                url: '/page1',
                templateUrl: 'public/app/admin/app/inventory/index.html'
            })
            .state('app.inventory.page2', {
                url: '/page2',
                templateUrl: 'public/app/admin/app/inventory/manage.html'
            })
            .state('appLogin', {
                abstract: true,
                url: '/Admin/',
                templateUrl: 'public/app/admin/layouts/simple.html'
            })
            .state('appLogin.login', {
                url: 'login',
                templateUrl: 'public/app/admin/app/login/login.html',
                controller:'loginController',
                controllerAs:'vm'
            })
    }

    function run($state, $location, $rootScope) {
        $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {

            if (toState.url === 'login') {
                angular.element('#mainIndex')
                    .removeClass('hold-transition skin-blue sidebar-mini')
                    .addClass('hold-transition login-page');
            }
            else {
                angular.element('#mainIndex')
                    .removeClass('hold-transition login-page')
                    .addClass('hold-transition skin-blue sidebar-mini');
            }
        });
    }
})();