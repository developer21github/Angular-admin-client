(function () {
    'use strict';
    angular.module('app')
        .factory('bootBoxService', bootBoxService);


    function bootBoxService() {
        var service = {
            confirmBox: confirmBox
        }
        return service;

        function confirmBox(name, callback) {
            bootbox.confirm({
                message: "Are you sure you want to delete, " + name + "?",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-danger'
                    }
                },
                callback: function (result) {
                    callback(result);
                }
            });
        }
    }

})();