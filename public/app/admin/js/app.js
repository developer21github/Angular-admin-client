(function () {
    'use strict';
    angular.module('app', ['ui.router',
        'oc.lazyLoad',
        'datatables',
        'ngFileUpload',
        'toastr'
    ])
        .constant('webservice', {
            api:'http://localhost:4040'
        });
})();