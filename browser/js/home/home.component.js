'use strict';

let HomeController = function ($stateParams, $location, $anchorScroll, $http, toastr) {

    let ctrl = this;

    ctrl.$onInit = function () {
    	if ($stateParams.scrollTo) {
    		$location.hash($stateParams.scrollTo);
    		$anchorScroll();
    	}
    };

    ctrl.sendEmail = function (email) {
        $http.post('/api/email', email)
        .then( res => {
            toastr.success('Your message has been sent!');
        })
        .catch( err => {
            toastr.error('Please send an email to jonperrelle@gmail.com', 'Something went wrong!');
        });
    };

};

angular.module('Portfolio').component('home', {
    templateUrl: 'js/home/home.html',
    controller: HomeController
});

