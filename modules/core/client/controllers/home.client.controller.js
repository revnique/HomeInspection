'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication','$timeout',
  function ($scope, Authentication, $timeout) {
    // This provides Authentication context.
      $scope.authentication = Authentication;
      $timeout(function () {
          sbAdminObj.init();
          morrisData.init();
      });
  }
]);
