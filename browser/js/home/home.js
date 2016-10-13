'use strict';

app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        template: '<home></home>',
        params: {
        	scrollTo: null
        }
    });
});