'use strict';

app.controller('HomeController', function ($scope, $stateParams, $location, $anchorScroll, $http, toastr) {


	if ($stateParams.scrollTo) {
		$location.hash($stateParams.scrollTo);
		$anchorScroll();
	}


    $scope.sendEmail = function (email) {
        $http.post('/api/email', email)
        .then( res => {
            toastr.success('Your message has been sent!');
        })
        .catch( err => {
            toastr.error('Please send an email to jonperrelle@gmail.com', 'Something went wrong!');
        });
    };

});



