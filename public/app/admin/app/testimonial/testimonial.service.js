(function () {
    'use strict';
    angular.module('app')
        .service('testimonialService', testimonialService)

    /** @injector */
    function testimonialService($http, Upload, webservice) {

        var service = {
            addTestimonial: addTestimonial,
            deleteTestimonial: deleteTestimonial,
            getAllTestimonial: getAllTestimonial,
            updateTestimonial: updateTestimonial,
            getTestimonialById: getTestimonialById
        }
        return service;

        function getTestimonialById(id) {
           return $http.get(webservice.api + '/testimonial/'+id);
        }

        function getAllTestimonial() {
            return $http.get(webservice.api + '/testimonial');
        }

        function addTestimonial(file) {
            return Upload.upload({
                method: 'POST',
                url: webservice.api + '/testimonial',
                data: file
            });
        }

        function deleteTestimonial(id) {
            return $http.delete(webservice.api + '/testimonial/' + id);
        }

        function updateTestimonial(testimonial) {
            return Upload.upload({
                method: 'PUT',
                url: webservice.api + '/testimonial/'+ testimonial._id,
                data: testimonial
            });
        }
    }
})();