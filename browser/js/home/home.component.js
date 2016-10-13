'use strict';

function HomeController($stateParams, $location, $anchorScroll, $http) {

    let ctrl = this;

    ctrl.$onInit = function () {
    	if ($stateParams.scrollTo) {
    		$location.hash($stateParams.scrollTo);
    		$anchorScroll();
    	}
    };

    ctrl.sendEmail = function (visitor) {

    };

}
app.component('home', {
    templateUrl: 'js/home/home.html',
    controller: HomeController
});

