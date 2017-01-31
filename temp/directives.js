

app.service('fileUpload', [
    '$http', function ($http) {
        this.uploadFileToUrl = function (file, uploadUrl, title, initialComment, bucket, folder, userId, organizationId, clientId, approvalId) {
            var fd = new FormData();
            fd.append('file', file);
            return $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined,
                    'X-H1TEQ-S3-TITLE': title,
                    'X-H1TEQ-S3-INIT-COMMENT': initialComment,
                    'X-H1TEQ-S3-USER-ID': userId,
                    'X-H1TEQ-S3-BUCKET': bucket,
                    'X-H1TEQ-S3-FOLDER-NAME': folder,
                    'X-H1TEQ-S3-CLIENT-ID': clientId,
                    'X-H1TEQ-S3-APPROVAL-ID': approvalId,
                    'X-H1TEQ-S3-ORGANIZATION-ID': organizationId
                }
            })
                .success(function () {
                    return true;
                })
                .error(function () {
                    return false;
                });
        }
    }
]);

app.directive('fileModel', ['$parse', '$rootScope',
    function ($parse, $rootScope) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;
                element.bind('change', function () {
                    scope.$apply(function () {
                        $rootScope.$broadcast('fileModelChanged', element[0].files[0]);
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }
]);


//app.directive('htOnChange', function () {
//    return function (scope, element, attrs) {
//        element.bind("change", function (event) {
//            scope.$apply(function () {
//                scope.$eval(attrs.htOnChange);
//            });
//        });
//    };
//});




//<ht-checkbox class="txt-xxl" data-use-check-mark="false" data-ng-disabled="false" data-ng-model="part.isPicked" data-on-click="vm.doPick(invoice.invoiceId, part.partId, !part.isPicked)"data-checkbox-id="part.partId" data-label="{{ labelfield}}"/>
app.directive('htCheckbox', [
    function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                ngModel: '=',
                checkboxId: '@',
                label: '@',
                enterToggles: '@',
                useCheckMark: '@',
                useCircles: '@',
                hideLabel: '@',
                onClick: '&'
            },
            template: '<a id="{{ checkboxId }}" href="javascript:void(0)" ng-click="checkUncheckMe()" ng-class="setMyClass()">' +
                '<label ng-hide="hideLabel" for="{{ checkboxId }}">{{ label }}</label><i class="fa fa-fw" ng-class="setMyIconClass()"></i></a>',
            link: function (scope, el, attrs) {
                el.bind('keydown', function ($event) {
                    if (($event.keyCode === 32) || (scope.enterToggles && $event.keyCode === 13)) {
                        $event.preventDefault();
                        $event.currentTarget.click();
                        return false;
                    } else
                        return true;
                });
                scope.checkUncheckMe = function () {
                    if (attrs.disabled) {
                        return;
                    }
                    scope.ngModel = !scope.ngModel;
                    if (scope.onClick != undefined) {
                        scope.onClick();
                    }
                };
                scope.setMyIconClass = function () {
                    var rtn;

                    if (scope.useCircles === "true") {
                        if (scope.useCheckMark === "true") {
                            rtn = scope.ngModel === true ? "fa-check-circle" : "fa-circle-o";
                        } else {
                            rtn = scope.ngModel === true ? "fa-circle" : "fa-circle-o";
                        }
                    } else {
                        if (scope.useCheckMark === "true") {
                            rtn = scope.ngModel === true ? "fa-check-square" : "fa-square";
                        } else {
                            rtn = scope.ngModel === true ? "fa-square" : "fa-square-o";
                        }
                    }

                    return rtn;
                };
                scope.setMyClass = function () {
                    var rtn = "htcheckbox";
                    if (attrs.disabled) {
                        rtn += " disabled";
                    }
                    return rtn;
                };
            }
        };
    }
]);

//<ht-radio class="txt-lg" data-ng-model="vm.statuses" data-selected="vm.status" on-click="vm.click();"></ht-radio>
app.directive('htRadio', [
    function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                ngModel: '=',
                selected: '=',
                hideLabel: '@',
                selectedObj: '=',
                onClick: '&'
            },
            template: '<div><a ng-repeat="radio in ngModel" href="javascript:void(0)" ng-click="clickMe(radio)">' +
                '<div class="ht-radio-label"><label ng-hide="hideLabel" >{{ radio.label }}</label></div><i class="ht-radio-button fa fa-fw" ng-class="{\'fa-circle\':selected===radio.value,\'fa-circle-o\':selected!==radio.value}"></i></a></div>',
            link: function (scope, el, attrs) {
                scope.clickMe = function (radio) {
                    if (attrs.disabled) {
                        return;
                    }
                    scope.selected = radio.value;
                    scope.selectedObj = radio;
                    if (scope.onClick != undefined) {
                        scope.onClick();
                    }
                };
                scope.setMyClass = function () {
                    var rtn = "htradio";
                    if (attrs.disabled) {
                        rtn += " disabled";
                    }
                    return rtn;
                };
            }
        };
    }
]);


//<ht-floating-text-field floating-field="ff" floating-field-id="{{ff.floatingFieldId}}" size="{{ff.size}}" data-label="{{ff.label}}" enter-submits="true" autocomplete="shipping given-name" css-class="field--half field field--optional"></ht-floating-text-field>
app.directive('htFloatingTextField', [
    function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                floatingField: '=',
                floatingFieldId: '@',
                cssClass: '@',
                enterSubmits: '@',
                autocomplete: '@',
                size: '@',
                label: '@',
                hotkeyPress: '&',
                floatingFieldModel: '='
            },
            template: '<div id="floatingFieldParent{{ floatingFieldId }}" ng-class="setMyClass()">' +
                '<div class="field__input-wrapper">' +
                '<label class="field__label" for="floatingField{{floatingFieldId}}">{{ label }}</label>' +
                '<input placeholder="{{ label }}" autocomplete="{{autocomplete}}" class="field__input" ' +
                'size="{{size}}" type="text" name="floatingField{{floatingFieldId}}" ' +
                'ng-model="floatingFieldModel" id="floatingField{{floatingFieldId}}" ng-keydown="checkForEnter($event)">' +
                '</div>' +
                '</div>',
            link: function (scope, el, attrs) {
                el.bind('keydown', function ($event) {
                    //spacebar or enter for other controls
                    //if (($event.keyCode === 32) || (scope.enterSubmits && $event.keyCode === 13)) {
                    if (scope.enterSubmits && $event.keyCode === 13) {
                        $event.preventDefault();
                        return false;
                    } else {
                        return true;
                    }
                });

                scope.checkForEnter = function (keyEvent) {
                    if (scope.enterSubmits && keyEvent.which === 13) {
                        scope.hotkeyPress();
                    }
                };


                scope.setMyClass = function () {
                    if (scope.floatingField != undefined && scope.floatingFieldModel != undefined) {
                        scope.labelIsFloating = scope.floatingFieldModel.length > 0;
                    } else {
                        scope.labelIsFloating = false;
                    }

                    var rtn = scope.cssClass;
                    if (attrs.disabled) {
                        rtn += " disabled";
                    }
                    if (scope.labelIsFloating) {
                        rtn += " field--show-floating-label";
                    }
                    return rtn;
                };
            }
        };
    }
]);

//<ht-floating-select-field floating-field="ff" floating-field-id="{{ff.floatingFieldId}}" size="{{ff.size}}" data-label="{{ff.label}}" css-class="field field--required field--three-eights"></ht-floating-select-field>
app.directive('htFloatingSelectField', [
    '$timeout',
    function ($timeout) {
        return {
            restrict: 'E',
            replace: true,
            priority: 30,
            scope: {
                floatingField: '=',
                floatingFieldId: '@',
                cssClass: '@',
                label: '@'
            },
            template: '<div ng-class="setMyClass()">' +
                '<div class="field__input-wrapper field__input-wrapper--select">' +
                '<label class="field__label" for="floatingField{{floatingFieldId}}">{{ label }}</label>' +
                '<input type="hidden" name="floatingField{{floatingFieldId}}">' +
                '<select placeholder="{{ label }}" class="field__input field__input--select" name="floatingField{{floatingFieldId}}" id="floatingField{{floatingFieldId}}" ng-model="floatingField.selectedItem"' +
                ' ng-options="option.name for option in floatingField.options">' +
                '<option value="" selected>-- {{ label }} --</option>' +
                '</select>' +
                '</div>' +
                '</div>',
            link: function (scope, el, attrs) {
                $timeout(function () {
                    scope.setMyClass = function () {
                        //console.log("ff", scope.floatingField);
                        scope.labelIsFloating = (scope.floatingField != null && scope.floatingField.selectedItem != null && scope.floatingField.selectedItem.length > 0)
                            || scope.floatingField != null && scope.floatingField.selectedItem != null && scope.floatingField.selectedItem.value != null && scope.floatingField.selectedItem.value.length > 0;
                        var rtn = scope.cssClass;
                        if (attrs.disabled) {
                            rtn += " disabled";
                        }
                        if (scope.labelIsFloating) {
                            rtn += " field--show-floating-label";
                        } else {
                            rtn += " nothing-selected";
                        }
                        return rtn;
                    };
                }, 250);

            }
        };
    }
]);

//<div ht-resize-width="45"></div>
app.directive('htResizeWidth', [
    '$window', function ($window) {
        return {
            link: link,
            restrict: 'A'
        };
        function link(scope, element, attrs) {
            scope.$watchCollection('selectList', function (newValue) {
                var screenWidth2 = $window.innerWidth * 1;
                var offsetWidth2 = attrs.htResizeWidth * 1;
                element[0].style.width = screenWidth2 - offsetWidth2 + "px";
                console.log(element[0].style.width, $window.innerWidth);

                $scope.$broadcast('htResizeWidthEvent', { width: $window.innerWidth });
            });

            angular.element($window).bind('resize', function () {
                var screenWidth2 = $window.innerWidth * 1;
                var offsetWidth2 = attrs.htResizeWidth * 1;
                element[0].style.width = screenWidth2 - offsetWidth2 + "px";
                console.log(element[0].style.width, $window.innerWidth);
            });

            angular.element($window).bind('load', function () {
                var screenWidth1 = $window.innerWidth * 1;
                var offsetWidth1 = attrs.htResizeWidth * 1;
                element[0].style.width = screenWidth1 - offsetWidth1 + "px";
                console.log(element[0].style.width, $window.innerWidth);
            });
        }

    }
]);


//<div ht-resize-height="45"></div>
app.directive('htResizeHeight', [
    '$window', '$rootScope', function ($window, $rootScope) {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            $rootScope.$on('imageonloadEvent', function (e, args) {
                var screenHeight2 = $window.innerHeight * 1;
                var offsetHeight2 = attrs.htResizeHeight * 1;
                element[0].style.height = screenHeight2 - offsetHeight2 + "px";
                var auditObj = { "height": element[0].style.height, "screenHeight": screenHeight2, "newHeight": element[0].style.height };
                console.log("htResizeImgHeightEventresize", auditObj);

                angular.element($window).bind('resize', function() {
                    var screenHeight2 = $window.innerHeight * 1;
                    var offsetHeight2 = attrs.htResizeHeight * 1;
                    element[0].style.height = screenHeight2 - offsetHeight2 + "px";

                    var auditObj = { "height": element[0].style.height, "screenHeight": screenHeight2, "newHeight": element[0].style.height };
                    console.log("htResizeImgHeightEventresize", auditObj);
                });
            });
        }
    }
]);




////<div ht-resize-img-height="45"></div>
//app.directive('htResizeImgHeight', [
//    '$window', '$rootScope', '$timeout', function($window, $rootScope, $timeout) {
//        return {
//            link: link,
//            restrict: 'A'
//        };

//        function link(scope, element, attrs) {
//            $rootScope.$on('imageonloadEvent', function (e, args) {
//                var floor = args.imgHeight * 1;

//                angular.element($window).bind('resize', function() {
//                    var screenHeight2 = $window.innerHeight * 1;

//                    screenHeight2 = floor > screenHeight2 ? floor : screenHeight2;
//                    var offsetHeight2 = attrs.htResizeImgHeight * 1;
//                    var newHeight = screenHeight2 - offsetHeight2;
//                    element[0].style.height = newHeight + "px";
//                    var auditObj = { "height": element[0].style.height, "screenHeight": screenHeight2, "floor": floor, "newHeight": newHeight };
//                    console.log("htResizeImgHeightEventresize", auditObj);
//                });

//                var screenHeight2 = $window.innerHeight * 1;
//                screenHeight2 = floor > screenHeight2 ? floor : screenHeight2;
//                var offsetHeight2 = attrs.htResizeImgHeight * 1;
//                var newHeight = screenHeight2 - offsetHeight2;
//                element[0].style.height = newHeight + "px";
//                var auditObj = { "height": element[0].style.height, "screenHeight": screenHeight2, "floor": floor, "newHeight": newHeight };
//                console.log("htResizeImgHeightEventload", auditObj);
//            });
//        }
//    }
//]);




//focus-on="setCommentFocus"   $scope.$broadcast('setCommentFocus');
app.directive('focusOn', function () {
    return function (scope, elem, attr) {
        scope.$on(attr.focusOn, function (e) {
            elem[0].focus();
        });
    };
});

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

















//<div ht-resize-height-with-event="45"></div>
app.directive('htResizeHeightWithEvent', [
    '$window', '$rootScope', '$timeout', function ($window, $rootScope, $timeout) {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            $rootScope.$on('imageonloadEvent', function (e, args) {
                var floor = args.imgHeight * 1;

                angular.element($window).bind('resize', function () {

                    var screenHeight2 = $window.innerHeight * 1;

                    screenHeight2 = floor > screenHeight2 ? floor : screenHeight2;
                    var offsetHeight2 = attrs.htResizeHeightWithEvent * 1;
                    var newHeight = screenHeight2 - offsetHeight2;
                    element[0].style.height = newHeight + "px";
                    var auditObj = { "height": element[0].style.height, "screenHeight": screenHeight2, "floor": floor, "newHeight": newHeight };
                    console.log("htResizeImgHeightEventresize resize", auditObj);
                    //$rootScope.$emit('htResizeImgHeightEvent', auditObj);
                });

                var screenHeight2 = $window.innerHeight * 1;
                screenHeight2 = floor > screenHeight2 ? floor : screenHeight2;
                var offsetHeight2 = attrs.htResizeHeightWithEvent * 1;
                var newHeight = screenHeight2 - offsetHeight2;
                element[0].style.height = newHeight + "px";
                var auditObj = { "height": element[0].style.height, "screenHeight": screenHeight2, "floor": floor, "newHeight": newHeight };
                console.log("htResizeImgHeightEvent load", auditObj);
                //$rootScope.$emit('htResizeImgHeightEvent', auditObj);
            });
        }
    }
]);


//<div ht-main-image-container-resize></div>
app.directive('htMainImageContainerResize', [
    '$window', '$rootScope', '$timeout', function ($window, $rootScope, $timeout) {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            var doShtuff = function() {
                var auditObj = { "panelWidth": element[0].offsetWidth, "panelHeight": element[0].offsetHeight };
                console.log("panel--------Resize", auditObj);
                $rootScope.$emit('htMainImageContainerResizeEvent', auditObj);
            };

            angular.element($window).bind('resize', function () {
                doShtuff();
            });
            doShtuff();
        }
    }
]);

app.directive('imageonload', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'A',
        controller: function () { },
        link: function (scope, element, attrs) {
            var img = document.getElementById(element[0].id);
            //var img = document.getElementById(element[0].id);
            //if (img.complete) {
            //    var auditObj = element[0].offsetHeight;
            //    console.log('ima on load', auditObj);
            //    $rootScope.$emit('imageonloadEvent', { 'imgHeight': auditObj });
            //} else {
            //    alert('image could not be loaded');
            //}
            element.bind('load', function () {
                var auditObj = element[0].offsetHeight;
                console.log('ima on load', auditObj);
                $rootScope.$emit('imageonloadEvent', { 'imgHeight': auditObj });
            });
            element.bind('error', function () {
               // alert('image could not be loaded');
            });
        }
    };
}]);


//<div ht-window-resizing></div>
app.directive('htWindowResizing', [
    '$window', '$rootScope', '$timeout', function ($window, $rootScope, $timeout) {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            var doit;
            var doShtuff = function () {
                var auditObj = { "panelWidth": element[0].offsetWidth, "panelHeight": element[0].offsetHeight };
                console.log("window---resizing---window---resizing---DONE---DONE", auditObj);
                $rootScope.$emit('htWindowResizingDoneEvent', auditObj);
            };

            angular.element($window).bind('resize', function () {
                console.log("window---resizing---window---resizing");
                clearTimeout(doit);
                doit = setTimeout(function () {
                    doShtuff();
                }, 500);
            });
        }
    }
]);



