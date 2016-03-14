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

        vm.webcamSetUp = function() {
            Webcam.set({
                // live preview size
                width: 320,
                height: 240,

                // device capture size
                dest_width: 640,
                dest_height: 480,

                // final cropped size
                crop_width: 480,
                crop_height: 480,

                // format and quality
                image_format: 'jpeg',
                jpeg_quality: 90,

                // flip horizontal (mirror mode)
                flip_horiz: true
            });
            Webcam.attach('#my_camera');
        };

        $timeout(function () {
            sbAdminObj.init();
            vm.loadTemplates();

            if ($state.is("inspections-photo")) {
                vm.webcamSetUp();
            }

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









//angular.module('harristeqApp')
//.directive("inspections-photo", ['$q', '$timeout', '$filter', 'alertService', function ($q, $timeout, $filter, alertService) {
//    return {
//        restrict: "E",
//        scope: {
//            captureMessage: '@',
//            countdown: '@',
//            flashFallbackUrl: '@',
//            overlayUrl: '@',
//            outputHeight: '@',
//            outputWidth: '@',
//            shutterUrl: '@',
//            viewerHeight: '@',
//            viewerWidth: '@',
//            cropHeight: '@',
//            cropWidth: '@',
//            imageFormat: '@',
//            jpegQuality: '@',
//            picture: '=',
//            thumbnailImages: '=',
//            onDelete: "&",
//            onSetAsPhoto: "&",
//            onDonotUsePhoto: "&"
//        },
//        link: function (scope, element, attrs) {
//            /**
//             * Set default variables
//             */
//            var mode = {
//                Upload: 0,
//                Camera: 1
//            };

//            scope.libraryLoaded = false;
//            scope.cameraLive = false;
//            scope.activeCountdown = false;
//            scope.cameraMode = false;
//            scope.preview = false;
//            scope.mode = mode.Upload;

//            var rotation = 0, ratio = 1;
//            var CanvasCrop = $.CanvasCrop({
//                cropBox: ".imageBox",
//                imgSrc: "/Images/profile_male.svg",
//                limitOver: 2
//            });

//            /**
//             * Set dimensions
//             */
//            if (scope.viewerHeight === undefined) {
//                scope.viewerHeight = 'auto';
//            }
//            if (scope.viewerWidth === undefined) {
//                scope.viewerWidth = 'auto';
//            }
//            if (scope.outputHeight === undefined) {
//                scope.outputHeight = scope.viewerHeight;
//            }
//            if (scope.outputWidth === undefined) {
//                scope.outputWidth = scope.viewerWidth;
//            }

//            /**
//             * Disable cropping if one or the two params are undefined
//             */
//            if (scope.cropHeight === undefined || scope.cropWidth === undefined) {
//                scope.cropHeight = false;
//                scope.cropWith = false;
//            }

//            /**
//             * Set configuration parameters
//             * @type {object}
//             */
//            Webcam.set({
//                width: scope.viewerWidth,
//                height: scope.viewerHeight,
//                dest_width: scope.outputWidth,
//                dest_height: scope.outputHeight,
//                crop_width: scope.cropWidth,
//                crop_height: scope.cropHeight,
//                image_format: scope.imageFormat,
//                jpeg_quality: scope.jpegQuality,
//                force_flash: false
//            });
//            if (scope.flashFallbackUrl !== 'undefined') {
//                Webcam.setSWFLocation(scope.flashFallbackUrl);
//            }

//            /**
//             * Register WebcamJS events
//             */
//            Webcam.on('load', function () {
//                scope.$apply(function () {
//                    scope.libraryLoaded = true;
//                });
//            });
//            Webcam.on('live', function () {
//                scope.$apply(function () {
//                    scope.cameraLive = true;
//                    scope.cameraMode = true;
//                });
//            });

//            Webcam.on('error', function (error) {
//                scope.$apply(function () {
//                    scope.cameraMode = false;
//                    alertService.error('No camera detected.');
//                });
//            });

//            /**
//             * Preload the shutter sound
//             */
//            if (scope.shutterUrl !== undefined) {
//                scope.shutter = new Audio();
//                scope.shutter.autoplay = false;
//                if (navigator.userAgent.match(/Firefox/)) {
//                    scope.shutter.src = scope.shutterUrl.split('.')[0] + '.ogg';
//                } else {
//                    scope.shutter.src = scope.shutterUrl;
//                }
//            }

//            /**
//             * Set countdown
//             */
//            if (scope.countdown !== undefined) {
//                scope.countdownTime = parseInt(scope.countdown) * 1000;
//                scope.countdownText = parseInt(scope.countdown);
//            }
//            scope.countdownStart = function () {
//                scope.activeCountdown = true;
//                scope.countdownPromise = $q.defer();
//                scope.countdownTick = setInterval(function () {
//                    return scope.$apply(function () {
//                        var nextTick;
//                        nextTick = parseInt(scope.countdownText) - 1;
//                        if (nextTick === 0) {
//                            scope.countdownText = scope.captureMessage != null ? scope.captureMessage : 'GO!';
//                            clearInterval(scope.countdownTick);
//                            scope.countdownPromise.resolve();
//                        } else {
//                            scope.countdownText = nextTick;
//                        }
//                    });
//                }, 1000);
//            };

//            /**
//             * Get snapshot
//             */
//            scope.getSnapshot = function () {
//                if (scope.countdown !== undefined) {
//                    scope.countdownStart();
//                    scope.countdownPromise.promise.then(function () {
//                        $timeout(function () {
//                            scope.activeCountdown = false;
//                            scope.countdownText = parseInt(scope.countdown);
//                        }, 2000);

//                        if (scope.shutterUrl !== undefined) {
//                            scope.shutter.play();
//                        }

//                        Webcam.snap(function (data_uri) {
//                            setProfilePicture(data_uri, null);
//                            scope.cameraMode = false;
//                            scope.mode = mode.Camera;
//                            scope.stopCamera();
//                        });
//                    });
//                } else {
//                    if (scope.shutterUrl !== undefined) {
//                        scope.shutter.play();
//                    }

//                    Webcam.snap(function (data_uri) {
//                        setProfilePicture(data_uri, null);
//                        setImageEditor(data_uri);

//                        scope.cameraMode = false;
//                        scope.mode = mode.Camera;
//                        scope.stopCamera();
//                    });
//                }
//            };

//            scope.$on('$destroy', function () {
//                Webcam.reset();
//            });

//            scope.startCamera = function () {
//                scope.cameraMode = true;
//                if (!Webcam.live) {
//                    Webcam.attach('#ng-camera-feed');
//                }
//            };

//            scope.stopCamera = function () {
//                scope.cameraMode = false;
//                Webcam.reset()
//            };

//            scope.$watchCollection('thumbnailImages', function (newThumbnailImages) {
//                scope.profilePicture = $filter('filter')(scope.thumbnailImages, { IsPrimary: true })[0];

//                if (scope.profilePicture != undefined && scope.profilePicture != null) {
//                    setImageEditor("data:image/jpeg;base64," + scope.profilePicture.ThumbnailBLOB);
//                    scope.picture = angular.copy(scope.profilePicture);
//                    scope.preview = true;
//                }
//                else {
//                    setImageEditor("/Images/profile_male.svg");
//                    scope.preview = false;
//                    scope.picture = null;
//                }
//            });

//            // ************* Image Builder ******************
//            angular.element("#photoFile").on('change', function () {
//                scope.stopCamera();
//                scope.mode = mode.Upload;
//                if (!isValidFile()) {
//                    alertService.error('Invalid image format.');
//                    return;
//                }
//                var imgSize = (angular.element("#photoFile")[0].files[0].size / 1024);
//                if (parseInt(imgSize) > 4 * 1024) {
//                    alertService.error('Photo size can not be more than 4 MB.');
//                    return;
//                }

//                var reader = new FileReader();
//                reader.onload = function (e) {
//                    setImageEditor(e.srcElement.result);

//                    rotation = 0;
//                    ratio = 1;

//                    scope.$apply(function () {
//                        scope.cameraMode = false;
//                        setProfilePicture(e.srcElement.result, null);
//                    });
//                }
//                reader.readAsDataURL(this.files[0]);
//                this.files = [];
//            });

//            angular.element("#rotateLeft").on("click", function () {
//                rotation -= 90;
//                rotation = rotation < 0 ? 270 : rotation;
//                CanvasCrop.rotate(rotation);

//                setPicture();
//            });

//            angular.element("#rotateRight").on("click", function () {
//                rotation += 90;
//                rotation = rotation > 360 ? 90 : rotation;
//                CanvasCrop.rotate(rotation);

//                setPicture();
//            });

//            angular.element("#zoomIn").on("click", function () {
//                ratio = ratio * 0.9;
//                CanvasCrop.scale(ratio);

//                setPicture();
//            });

//            angular.element("#zoomOut").on("click", function () {
//                ratio = ratio * 1.1;
//                CanvasCrop.scale(ratio);

//                setPicture();
//            });

//            angular.element("#crop").on("click", function () {
//                var src = CanvasCrop.getDataURL("jpeg", scope.mode);
//                setImageEditor(src);

//                scope.$apply(function () {
//                    setProfilePicture(null, src);
//                    scope.mode = mode.Upload;
//                });
//            });

//            scope.removePicture = function () {
//                bootbox.confirm('Are you sure you want to deactivate?', function (confirmed) {
//                    if (confirmed) {
//                        scope.$apply(function () {
//                            setProfilePicture(null, null);
//                            setImageEditor("/Images/profile_male.svg");
//                            angular.element("#photoFile").val('');
//                        });
//                    }
//                });
//            };

//            function setPicture() {
//                scope.$apply(function () {
//                    var src = CanvasCrop.getActualDataURL("jpeg");
//                    setProfilePicture(src, src);
//                });
//            }

//            function setProfilePicture(image, thumbnail) {
//                scope.picture = scope.picture || {};

//                // Clear profile/preview picture
//                if (image == null && thumbnail == null) {
//                    scope.picture = {};
//                    scope.preview = false;
//                    return;
//                }

//                scope.preview = true;
//                if (image != null) {
//                    var imageContent = dataURItoBlob(image);
//                    scope.picture.PhotoBLOB = imageContent.data;
//                    scope.picture.ThumbnailBLOB = imageContent.data;
//                }
//                if (thumbnail != null) {
//                    var imageContent = dataURItoBlob(thumbnail);
//                    scope.picture.ThumbnailBLOB = imageContent.data;
//                }
//            }

//            function setImageEditor(src) {
//                CanvasCrop = $.CanvasCrop({
//                    cropBox: ".imageBox",
//                    imgSrc: src,
//                    limitOver: 2
//                });
//            };

//            function isValidFile() {
//                var input = angular.element("#photoFile")[0];
//                if (input.files && input.files[0]) {
//                    var ftype = input.files[0].type;
//                    switch (ftype) {
//                        case 'image/png':
//                        case 'image/gif':
//                        case 'image/jpeg':
//                        case 'image/pjpeg':
//                            return true;
//                        default:
//                            return false;
//                    }
//                }
//                else
//                    return true;
//            };

//            // ******** *VIEW PHOTOS CAROUSEL **********
//            scope.initOwlCarousel = function () {
//                $timeout(function () {
//                    if (angular.element("#photoLibrary").data('owlCarousel') != undefined) {
//                        angular.element("#photoLibrary").data('owlCarousel').destroy();
//                        angular.element('#photoLibrary .owl-item').remove();
//                    }

//                    angular.element("#photoLibrary").owlCarousel({
//                        itemsCustom: [
//                            [0, 3],
//                            [401, 3],
//                            [1189, 3]
//                        ],
//                        navigation: true,
//                        navigationText: [
//                            "<i class='fa fa-caret-left'><span class='sr-only'>previous</span></i>",
//                            "<i class='fa fa-caret-right'><span class='sr-only'>next</span></i>"
//                        ],
//                        pagination: false
//                    });
//                });
//            }
//        },
//        templateUrl: '/Photo/PhotoProfile'
//    }
//}]);

