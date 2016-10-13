app.directive('navbar', function ($state, $anchorScroll, $location) {

    return {
        restrict: 'E',
        templateUrl: 'js/navbar/navbar.html',
        link: function (scope, element, attrs) {

        	scope.goToAbout = function () {
        		$state.go('home', {scrollTo: 'about'});

        	}
        }
    };
});
