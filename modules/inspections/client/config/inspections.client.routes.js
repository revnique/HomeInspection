'use strict';

//Setting up route
angular.module('inspections').config(['$stateProvider',
  function($stateProvider) {
    // Inspections state routing
    $stateProvider
      .state('inspections', {
        url: '/inspections',
        templateUrl: 'modules/inspections/client/views/inspections.client.view.html'
      });
  }
]);
