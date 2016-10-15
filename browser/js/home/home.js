'use strict';

app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeController',
        params: {
        	scrollTo: null
        }
    });
});