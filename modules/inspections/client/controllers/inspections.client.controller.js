'use strict';


(function () {
    'use strict';

    angular
      .module('inspections')
      .controller('InspectionsController', InspectionsController);

    InspectionsController.$inject = ['$scope', '$state', 'Authentication', '$timeout'];

    function InspectionsController($scope, $state, Authentication, $timeout) {
        var vm = this;

        //vm.inspection = inspection;
        vm.authentication = Authentication;
        vm.error = null;
        vm.form = {};
        vm.remove = remove;
        vm.save = save;
        vm.inspection = {};

        $timeout(function () {
            sbAdminObj.init();
            //morrisData.init();
        });
        // Remove existing Article
        function remove() {
            if (confirm('Are you sure you want to delete?')) {
                vm.article.$remove($state.go('articles.list'));
            }
        }

        // Save Article
        function save(isValid) {
            if (!isValid) {
                $scope.$broadcast('show-errors-check-validity', 'vm.form.inspectionForm');
                return false;
            }

            // TODO: move create/update logic to service
            if (vm.inspection._id) {
                vm.inspection.$update(successCallback, errorCallback);
            } else {
                vm.inspection.$save(successCallback, errorCallback);
            } 

            function successCallback(res) {
                $state.go('inspection.view', {
                    inspectionId: res._id
                });
            }

            function errorCallback(res) {
                vm.error = res.data.message;
            }
        }
    }
})();
