'use strict';

app.config(function($stateProvider) {
    $stateProvider.state('portfolio', {
        url: '/portfolio',
        template: '<portfolio></portfolio>',
    });
});