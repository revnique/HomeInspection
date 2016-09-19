angular.module('full_starter.directives', [])

    .directive('sideMenu', [function () {
        return {
            restrict: 'E',
            templateUrl: 'app/core/sidemenu.html',
        };
    }])

    .directive('compareTo', [function () {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function (scope, element, attributes, ngModel) {

                ngModel.$validators.compareTo = function (modelValue) {
                    return modelValue == scope.otherModelValue;
                };

                scope.$watch("otherModelValue", function () {
                    ngModel.$validate();
                });
            }
        };
    }])

    // fitlers
    .filter('nl2br', ['$filter',
        function ($filter) {
            return function (data) {
                if (!data) return data;
                return data.replace(/\n\r?/g, '<br />');
            };
        }
    ])

    // directives
    .directive('autolinker', ['$timeout',
        function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    $timeout(function () {
                        var eleHtml = element.html();

                        if (eleHtml === '') {
                            return false;
                        }

                        var text = Autolinker.link(eleHtml, {
                            className: 'autolinker',
                            newWindow: false
                        });

                        element.html(text);

                        var autolinks = element[0].getElementsByClassName('autolinker');

                        for (var i = 0; i < autolinks.length; i++) {
                            angular.element(autolinks[i]).bind('click', function (e) {
                                var href = e.target.href;
                                console.log('autolinkClick, href: ' + href);

                                if (href) {
                                    //window.open(href, '_system');
                                    window.open(href, '_blank');
                                }

                                e.preventDefault();
                                return false;
                            });
                        }
                    }, 0);
                }
            }
        }
    ])

    .directive('uiMultiRange', function ($compile) {
        var directive = {
            restrict: 'E',
            scope: {
                ngModelMin: '=',
                ngModelMax: '=',
                ngMin: '=',
                ngMax: '=',
                ngStep: '='
            },
            link: link
        };

        return directive;

        function link($scope, $element, $attrs) {
            var min, max, step, $inputMin = angular.element('<input type="range">'), $inputMax;
            if (typeof $scope.ngMin != 'undefined') {
                min = $scope.ngMin;
                $inputMin.attr('min', min);
            } else {
                min = 0;
            }
            if (typeof $scope.ngMax != 'undefined') {
                max = $scope.ngMax;
                $inputMin.attr('max', max);
            } else {
                max = 100;
            }
            if (typeof $scope.ngStep != 'undefined') {
                $inputMin.attr('step', $scope.ngStep);
            }
            $inputMax = $inputMin.clone();
            $inputMin.attr('ng-model', 'ngModelMin');
            $inputMax.attr('ng-model', 'ngModelMax');
            $compile($inputMin)($scope);
            $compile($inputMax)($scope);
            $element.append($inputMin).append($inputMax);
            $scope.ngModelMin = $scope.ngModelMin || min;
            $scope.ngModelMax = $scope.ngModelMax || max;

            $scope.$watch('ngModelMin', function (newVal, oldVal) {
                if (newVal > $scope.ngModelMax) {
                    $scope.ngModelMin = oldVal;
                }
            });

            $scope.$watch('ngModelMax', function (newVal, oldVal) {
                if (newVal < $scope.ngModelMin) {
                    $scope.ngModelMax = oldVal;
                }
            });
        }
    })

    .directive('growingList', function () {
        return {
            restrict: 'EA',
            template:
            '<style> input[disabled]{background: none;}.title .row, .list-items .row,  .list-items .col{padding:2px;}.list-items .item{border:none;}.list-items .col{border-bottom: 1px solid #32A79D;}.list-items.row.ng-enter {-webkit-animation: fadeInDown .2s;animation: fadeInDown .2s;}.list-items.row.ng-leave {-webkit-animation: fadeOutDown .2s;animation: fadeOutDown .2s;}</style>' +
            '<div class="list list-items">' +
            '<div class="row item-remove-animate" ng-repeat="item in list track by $index">' +
            '<div class="col col-80">' +
            '<label class="item item-input">' +
            '<input type="text" placeholder="Item" ng-model="list[$index]" ng-model-options="{ updateOn: \'blur\' }" ng-disabled="disabled">' +
            '</label>' +
            '</div>' +
            '<div class="col text-right">' +
            '<button class="button button-icon icon ion-ios-minus assertive" ng-click="removeItem($index);" ng-if="list[$index] !== \'\'"></button>' +
            ' </div>' +
            '</div>' +
            '</div>' +
            '<button class="button button-block button-balanced" ng-click="saveItem(list);">Save</button>',
            scope: {
                list: '=ngModel'
            },
            link: function (scope, element, attributes) {
                scope.list = ['', ''];

                scope.$watch('list', function (newVal, oldVal) {
                    if (newVal.length === oldVal.length) {
                        if (newVal[newVal.length - 2] !== '')
                            scope.list.push('');
                    }
                }, true);

                scope.removeItem = function (index) {
                    scope.list.splice(index, 1);
                };

                scope.saveItem = function (shopping) {
                    scope.list.remove('');
                }

                Array.prototype.remove = function () {
                    var what, a = arguments, L = a.length, ax;
                    while (L && this.length) {
                        what = a[--L];
                        while ((ax = this.indexOf(what)) !== -1) {
                            this.splice(ax, 1);
                        }
                    }
                    return this;
                };

            }
        };
    })

    .directive('starRating', function () {
        return {
            restrict: 'EA',
            template:
            '<style>.star-rating {margin: 0;padding: 0;display: inline-block;}.star-rating .star {padding: 1px;color: #ddd;font-size: 20px;text-shadow: .05em .05em #aaa;list-style-type: none;display: inline-block;cursor: pointer;}.star-rating .star.filled {color: #fd0;}.star-rating.readonly .star.filled {color: #666;}</style>' +
            '<ul class="star-rating" ng-class="{readonly: readonly}">' +
            '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
            '    <i class="icon ion-star"></i>' + // or &#9733
            '  </li>' +
            '</ul>',
            scope: {
                ratingValue: '=ngModel',
                max: '=?', // optional (default is 5)
                onRatingSelect: '&?',
                readonly: '=?'
            },
            link: function (scope, element, attributes) {
                if (scope.max == undefined) {
                    scope.max = 5;
                }
                function updateStars() {
                    scope.stars = [];
                    for (var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled: i < scope.ratingValue
                        });
                    }
                };
                scope.toggle = function (index) {
                    if (scope.readonly == undefined || scope.readonly === false) {
                        scope.ratingValue = index + 1;
                        scope.onRatingSelect({
                            rating: index + 1
                        });
                    }
                };
                scope.$watch('ratingValue', function (oldValue, newValue) {
                    if (newValue) {
                        updateStars();
                    }
                });
            }
        };
    })

    .directive('map', function () {
        return {
            restrict: 'E',
            scope: {
                onCreate: '&',
                coords: '=coords'
            },
            link: function ($scope, $element, $attr) {
                function initialize() {
                    var mapOptions = {
                        center: new google.maps.LatLng($scope.coords[0], $scope.coords[1]),
                        zoom: 16,
                        animation: google.maps.Animation.DROP,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                    };
                    var map = new google.maps.Map($element[0], mapOptions);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng($scope.coords[0], $scope.coords[1])
                    });


                    $scope.onCreate({ map: marker });

                    // Stop the side bar from dragging when mousedown/tapdown on the map
                    google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
                        e.preventDefault();
                        return false;
                    });
                }

                if (document.readyState === "complete") {
                    initialize();
                } else {
                    google.maps.event.addDomListener(window, 'load', initialize);
                }
            }
        }
    })

