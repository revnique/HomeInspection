'use strict';


(function () {
    'use strict';

    angular
      .module('inspections')
      .controller('InspectionsController', InspectionsController);

    InspectionsController.$inject = ['$scope', '$state', 'Authentication', '$timeout', 'InspectionService'];

    function InspectionsController($scope, $state, Authentication, $timeout, InspectionService) {
        var vm = this;

        //vm.inspection = inspection;
        vm.authentication = Authentication;
        vm.error = null;
        vm.form = {};
        vm.remove = remove;
        vm.save = save;
        vm.inspection = {};


        vm.inspectionTemplate = {
            "title": "HarrisTeq Demo Template TWO",
            "categories": [
                {
                    "categoryName": "Demo Exterior TWO",
                    "categoryItems": [
                      {
                          "categoryItemName": "Siding",
                          "categoryItemOptions": [
                            {
                                "categoryItemOptionName": "Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Not Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Replace\/Repair",
                                "isSelected": false
                            }
                          ]
                      },
                      {
                          "categoryItemName": "Windows",
                          "categoryItemOptions": [
                            {
                                "categoryItemOptionName": "Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Not Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Replace\/Repair",
                                "isSelected": false
                            }
                          ]
                      },
                      {
                          "categoryItemName": "Doors",
                          "categoryItemOptions": [
                            {
                                "categoryItemOptionName": "Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Not Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Replace\/Repair",
                                "isSelected": false
                            }
                          ]
                      },
                      {
                          "categoryItemName": "Steps",
                          "categoryItemOptions": [
                            {
                                "categoryItemOptionName": "Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Not Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Replace\/Repair",
                                "isSelected": false
                            }
                          ]
                      }
                    ]
                }, {
                    "categoryName": "Heating/Cooling",
                    "categoryItems": [
                      {
                          "categoryItemName": "Heating Equipment",
                          "categoryItemOptions": [
                            {
                                "categoryItemOptionName": "Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Not Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Replace\/Repair",
                                "isSelected": false
                            }
                          ]
                      },
                      {
                          "categoryItemName": "Cooling Equipment",
                          "categoryItemOptions": [
                            {
                                "categoryItemOptionName": "Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Not Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Replace\/Repair",
                                "isSelected": false
                            }
                          ]
                      },
                      {
                          "categoryItemName": "Normal Operating Controls",
                          "categoryItemOptions": [
                            {
                                "categoryItemOptionName": "Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Not Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Replace\/Repair",
                                "isSelected": false
                            }
                          ]
                      }
                    ]
                }
            ]
        };


        vm.createItemOption = function (name, isSelected) {
            var rtn = {}
            rtn["categoryItemOptionName"] = name;
            rtn["isSelected"] = isSelected;
            return rtn;
        };


        vm.createInspectedCategoryItemOptions = function() {
            var rtn = [];
            rtn.push (createItemOption("Inspected", false));
            rtn.push (createItemOption("Not Inspected", false));
            rtn.push(createItemOption("Replace\/Repair", false));
            
            return rtn;
        };

        $timeout(function () {
            sbAdminObj.init();
            vm.loadTemplates();
            //morrisData.init();
        });
        // Remove existing Article
        function remove() {
            if (confirm('Are you sure you want to delete?')) {
                vm.article.$remove($state.go('articles.list'));
            }
        }

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

        vm.loadTemplates = function() {
            var promise = InspectionService.listInpsectionTemplate();
            promise.then(function (res) {
                //ambitApp.utils.convertDateStringsToDates(res);
                vm.showTemplates(res);
                vm.hideUi = false;
            }, function (response) {
                //failed
                //screenSvc.showAlert(response, 2, false);
                vm.hideUi = false;
            });
        }
        vm.showTemplates = function (res) {
            vm.templates = res;
            console.log(res);
        }

    }
})();
