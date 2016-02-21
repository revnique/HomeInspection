'use strict';

angular.module('inspections').directive('inspections', [
  function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // Inspections directive logic
        // ...

        element.text('this is the inspections directive');
      }
    };
  }
]);
