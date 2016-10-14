'use strict';

window.app = angular.module('Portfolio', ['ui.router', 'ngMessages', 'toastr']);

app.config(function ($urlRouterProvider, $locationProvider) {
    // This turns off hashbang urls
    $locationProvider.html5Mode(true);
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');

});
