'use strict';

app.config(function($stateProvider) {
    $stateProvider.state('resume', {
        url: '/resume',
        template: '<resume></resume>',
    });
});