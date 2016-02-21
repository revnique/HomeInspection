'use strict';

angular.module('inspections').filter('inspections', [
  function () {
    return function (input) {
      // Inspections directive logic
      // ...

      return 'inspections filter: ' + input;
    };
  }
]);
