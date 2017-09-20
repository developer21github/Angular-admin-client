(function () {
    'use strict';
    angular.module('app')
        .controller('testimonialController', testimonialController);

    /** @injector */
    function testimonialController(toastr, $state, bootBoxService, testimonialService, $stateParams) {
        var vm = this;
        vm.addTestimonial = addTestimonial;
        vm.getAllTestimonial = getAllTestimonial;
        vm.deleteTestimonial = deleteTestimonial;
        vm.updateTestimonial = updateTestimonial;
        vm.updateTestimonialForm = updateTestimonialForm;
        vm.getTestimonialById = getTestimonialById;
        vm.testimonail = {};

        function getTestimonialById() {
            if ($stateParams && $stateParams.id) {
                testimonialService.getTestimonialById($stateParams.id).then(function (response) {
                    vm.testimonial = response.data.data;
                }, function (error) {
                    toastr.error(error.data.message);
                })
            }
        }

        function getAllTestimonial() {
            testimonialService.getAllTestimonial().then(function (response) {
                vm.testimonail = angular.copy(response.data);
            }, function (error) {
                toastr.error(error.data.message);
            });
        }

        function addTestimonial(file) {
            if(file._id){
                file.isUpdate = typeof file.file === "string";
                testimonialService.updateTestimonial(file)
                    .then(function (response) {
                        if (response.status === 200) { //validate success
                            toastr.success(response.data.message);
                            $state.go('app.testimonialIndex');
                        } else {
                            toastr.error(response.data.message);
                        }
                    }, function (error) {
                        toastr.error(error.data.message);
                    })
            }else{
                testimonialService.addTestimonial(file)
                    .then(function (response) {
                        if (response.status === 200) { //validate success
                            toastr.success(response.data.message);
                            $state.go('app.testimonialIndex');
                        } else {
                            toastr.error(response.data.message);
                        }
                    }, function (error) {
                        toastr.error(error.data.message);
                    })
            }
        }

        function deleteTestimonial(id) {
            bootBoxService.confirmBox("testimonial", function (res) {
                if (res) {
                    testimonialService.deleteTestimonial(id)
                        .then(function (response) {
                            toastr.success(response.data.message);
                            vm.getAllTestimonial();
                        }, function (error) {
                            toastr.error(error.data.message);
                        })
                }
            })
        }

        function updateTestimonialForm(id) {
            $state.go('app.testimonialManage', {id: id});
        }

        function updateTestimonial(testimonial) {
            testimonialService.updateTestimonial(testimonial)
                .then(function (response) {
                    toastr.success(response.data.message);
                }, function (error) {
                    toastr.error(error.data.message);
                })
        }

        // init call
        vm.getAllTestimonial();
        vm.getTestimonialById();
    }

})();