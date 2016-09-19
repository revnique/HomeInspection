(function () {

    'use strict'

    angular.module('full_starter.controllers', [
        'mwl.calendar',
        'angularMoment',
        'ion-affix',
        'ngCordova',
        'monospaced.elastic',
        'ngLodash',
        'ion-datetime-picker',
        'ion-google-place',
        'chart.js'
    ])

        .controller('appCtrl', function ($rootScope, $state, $scope, $stateParams, appService, $ionicHistory, $ionicPopover, $ionicModal,
            $ionicScrollDelegate, $ionicLoading, $ionicActionSheet, $cordovaCamera, $cordovaSocialSharing, $cordovaGeolocation, $timeout) {

            initData();
            initIntro();
            initNews();
            initProfile();
            initDashboard();
            initShop();
            initChat();
            initCalendar();
            initAnimate();


            function initAnimate() {
                function testAnim(x) {
                    $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).removeClass();
                    });
                };

                $(document).ready(function () {
                    $('.js--triggerAnimation').click(function (e) {
                        e.preventDefault();
                        var anim = $('.js--animations').val();
                        testAnim(anim);
                    });

                    $('.js--animations').change(function () {
                        var anim = $(this).val();
                        testAnim(anim);
                    });
                });
            }
            // models
            function initData() {
                $rootScope.user = {
                    id: 1,
                    name: 'Adam Ionic',
                    email: 'adamionic@email.com',
                    photo: 'img/users/1.jpg',
                    city: 'Cambridge, United Kingdom'
                }
                $scope.contacts = appService.getContacts();
                $scope.searchPopover = $ionicPopover.fromTemplate(searchTemplate, {
                    scope: $scope
                });
                $scope.rating = 4;
                $scope.getSearch = function (search) {
                    $scope.searchFilter = search;
                }

                $cordovaGeolocation.getCurrentPosition({ timeout: 10000, enableHighAccuracy: true }).then(
                    function (position) {
                        $rootScope.currentLocation = [position.coords.latitude, position.coords.longitude];
                    });

                $scope.mapCreated = function (map) {
                    $scope.map = map;
                };

                $scope.goTo = function (page) {
                    $scope.closeAll();//Close all Modals
                    $state.go(page);
                    $ionicHistory.nextViewOptions({
                        disableAnimate: true,
                        disableBack: true
                    });
                }



                $scope.goBack = function (ui_sref) {
                    var currentView = $ionicHistory.currentView();
                    var backView = $ionicHistory.backView();

                    if (backView) {
                        //there is a back view, go to it
                        if (currentView.stateName == backView.stateName) {
                            //if not works try to go doubleBack
                            var doubleBackView = $ionicHistory.getViewById(backView.backViewId);
                            $state.go(doubleBackView.stateName, doubleBackView.stateParams);
                        } else {
                            backView.go();
                        }
                    } else {
                        $state.go(ui_sref);
                    }
                }

                $scope.signOut = function () {
                    $ionicLoading.show({
                        template: 'Signing out...'
                    });
                    $timeout(function () {
                        $ionicLoading.hide();
                        $scope.goTo('intro');
                    }, 2000);

                }

                if ($state.is('tabs.cards')) {
                    $scope.post = appService.getRandomObject($scope.news.items);
                }

            }
            // intro
            function initIntro() {

                $scope.gotoHome = function () {
                    $scope.closeAll();
                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner>'
                    });

                    $timeout(function () {
                        $ionicLoading.hide();
                        $state.go('tabs.dashboard');
                    }, 2000);
                }
                // Login modal
                $ionicModal.fromTemplateUrl('app/intro/login.html', {
                    scope: $scope,
                    animation: 'fade-in-scale',
                    backdropClickToClose: false
                }).then(function (modal) {
                    $scope.modalLogin = modal;
                });
                $scope.openLogin = function () {
                    $scope.modalLogin.show();
                };
                $scope.closeLogin = function () {
                    $scope.modalLogin.hide();
                };

                // Sign up modal
                $ionicModal.fromTemplateUrl('app/intro/signup.html', {
                    scope: $scope,
                    animation: 'fade-in-scale',
                    backdropClickToClose: false
                }).then(function (modal) {
                    $scope.modalRegister = modal;
                });
                $scope.openRegister = function () {
                    $scope.modalRegister.show();
                };
                $scope.closeRegister = function () {
                    $scope.modalRegister.hide();
                };

                // Forgot Password modal
                $ionicModal.fromTemplateUrl('app/intro/forgot.html', {
                    scope: $scope,
                    animation: 'fade-in-scale',
                    backdropClickToClose: false
                }).then(function (modal) {
                    $scope.modalForgot = modal;
                });
                $scope.openForgot = function () {
                    $scope.modalForgot.show();
                };
                $scope.closeForgot = function () {
                    $scope.modalForgot.hide();
                };

                $scope.uploadUserPhoto = function () {
                    $ionicActionSheet.show({
                        buttons: [{
                            text: 'Take Picture'
                        }, {
                                text: 'Select From Gallery'
                            }],
                        buttonClicked: function (index) {
                            switch (index) {
                                case 0: // Take Picture
                                    document.addEventListener("deviceready", function () {
                                        $cordovaCamera.getPicture(appService.getCameraOptions()).then(function (imageData) {
                                            alert(imageData);
                                            $rootScope.user.photo = "data:image/jpeg;base64," + imageData;
                                        }, function (err) {
                                            appService.showAlert('Error', err, 'Close', 'button-assertive', null);
                                        });
                                    }, false);

                                    break;
                                case 1: // Select From Gallery
                                    document.addEventListener("deviceready", function () {
                                        $cordovaCamera.getPicture(appService.getLibraryOptions()).then(function (imageData) {
                                            $rootScope.user.photo = "data:image/jpeg;base64," + imageData;
                                        }, function (err) {
                                            appService.showAlert('Error', err, 'Close', 'button-assertive', null);
                                        });
                                    }, false);
                                    break;
                            }
                            return true;
                        }
                    });
                };

                $scope.closeAll = function () {
                    $scope.closeRegister();
                    $scope.closeForgot();
                    $scope.closeLogin();
                }
            }

            // news
            function initNews() {
                $scope.newsPopover = $ionicPopover.fromTemplate(newsTemplate, {
                    scope: $scope
                });

                $scope.news = {
                    type: 'classic',
                    items: appService.getNews()
                }

                if ($state.is('tabs.post-detail') || $state.is('tabs.comments') || $state.is('tabs.likes')) {
                    $stateParams.post === null ? $scope.post = appService.getRandomObject($scope.news.items) : $scope.post = $stateParams.post;

                }
                $scope.gotoComments = function () {
                    $state.go('tabs.comments');
                    $ionicHistory.nextViewOptions({
                        disableAnimate: true,
                        disableBack: true
                    });
                }
                $scope.gotoLikes = function () {
                    $state.go('tabs.likes');
                    $ionicHistory.nextViewOptions({
                        disableAnimate: true,
                        disableBack: true
                    });
                }

                $scope.like = function (post) {
                    post.likes === undefined ? post.likes = [] : null;
                    if ($scope.liked == true) {
                        $scope.liked = false;
                        post.likes.splice(_.findIndex(post.likes, ['name', $rootScope.user.name]));
                    } else {
                        $scope.liked = true;
                        post.likes.push({ name: $rootScope.user.name, photo: $rootScope.user.photo, publishedDate: new Date() });
                    }
                }

                $scope.comment = function (input) {
                    $scope.commentMessage = '';
                    $scope.post.comments === undefined ? $scope.post.comments = [] : null;
                    $scope.post.comments.push({ text: input, name: $rootScope.user.name, photo: $rootScope.user.photo, publishedDate: new Date() });

                }

                $scope.share = function (post) {
                    document.addEventListener("deviceready", function () {
                        $cordovaSocialSharing.share(post.summary, post.title, post.image)
                            .then(function (result) {
                                appService.showAlert('Post Shared', result, 'Ok', 'button-balanced', null);
                            }, function (err) {
                                appService.showAlert('Error Occured', err, 'Ok', 'button-assertive', null);
                            });
                    }, false);
                }
            }

            // profile
            function initProfile() {
                $scope.profile = { type: 1 };
            }

            // dashboard
            function initDashboard() {
                chartData();

                $scope.viewDate = new Date();
                $scope.notifyTimes = ['at set time', '15 mins before', '30 mins before', '45 mins before', 'an hour before'];
                $scope.notifications = appService.getNotifications();
                getDateEvents(moment($scope.viewDate._d).startOf('day')._d);

                $scope.decrementDate = function (item) {
                    if (angular.isUndefined($scope.viewDate._d)) $scope.viewDate = moment($scope.viewDate).startOf('day').subtract(1, 'days');
                    else $scope.viewDate = moment($scope.viewDate._d).startOf('day').subtract(1, 'days');
                    getDateEvents($scope.viewDate._d)
                };

                $scope.incrementDate = function (item) {
                    if (angular.isUndefined($scope.viewDate._d)) $scope.viewDate = moment($scope.viewDate).startOf('day').add(1, 'days');
                    else $scope.viewDate = moment($scope.viewDate._d).startOf('day').add(1, 'day');
                    getDateEvents($scope.viewDate._d)
                };
                function getDateEvents(date) {
                    var range = moment().range(date, moment(date).endOf('day'));
                    $scope.seletedDateEvents = [];
                    angular.forEach($scope.notifications, function (value, key) {
                        if (moment(value.startsAt).within(range)) {
                            $scope.seletedDateEvents.push(value);
                        }
                    });
                }

                if ($state.is('create-edit-reminder')) {
                    $stateParams.reminder !== null ? $scope.reminder = angular.copy($stateParams.reminder) : $scope.reminder = { type: 'Add Task', startsAt: new Date(), endsAt: new Date(), allDay: true, remindTime: [] };
                    $stateParams.type !== null ? $scope.reminder.type = angular.copy($stateParams.type) : null;
                }

                $scope.reminderPopover = $ionicPopover.fromTemplate(reminderTemplate, {
                    scope: $scope
                });

                $ionicModal.fromTemplateUrl('app/dashboard/remind-at-modal.html', {
                    scope: $scope,
                    animation: 'fade-in-scale'
                }).then(function (modal) {
                    $scope.modalRemindAt = modal;
                });
                $scope.openRemindAt = function () {
                    $scope.modalRemindAt.show();
                };
                $scope.closeRemindAt = function () {
                    $scope.modalRemindAt.hide();
                };

                $scope.notifyCheck = function (index, item) {
                    if (angular.isUndefined($scope.reminder.remindTime[index])) {
                        $scope.reminder.remindTime[index] = item;
                    } else {
                        $scope.reminder.remindTime[index] = false;
                    }
                }

                $scope.saveReminder = function () {
                    if ($scope.reminderForm.$valid) {
                        if ($stateParams.reminder === null) {
                            $rootScope.notifications.push($scope.reminder);
                        } else {
                            $rootScope.notifications.splice($rootScope.notifications.indexOf(_.find($rootScope.notifications, function (obj) { return obj == $stateParams.reminder })), 1, $scope.reminder);
                        }
                    } else {
                        appService.showAlert('Form Invalid', '<p class="text-center">A title and start date is required</p>', 'Ok', 'button-assertive', null);
                    }
                }

                function chartData() {
                    $scope.line_labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
                    $scope.line_data = [
                        [65, 59, 80, 81, 56, 55, 40],
                        [28, 48, 40, 19, 86, 27, 90]
                    ];

                    $scope.doughnut_labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
                    $scope.doughnut_data = [300, 500, 100];
                }
            }

            // shop
            function initShop() {
                $scope.list_type = 'grid';
                $scope.sizes = [6, 7, 8, 9, 10, 11, 12];
                $scope.products = appService.getProducts();

                if ($state.is('tabs.cards')) {
                    $scope.product === undefined ? $scope.product = appService.getRandomObject($scope.products) : null;
                }

                $scope.cart === undefined ? $scope.cart = [] : null;


                $scope.selectProductDetails = function (product) {
                    $scope.product = product;
                    $scope.openProductDetails();
                }
                $scope.addToCart = function (product) {
                    $scope.products.splice(_.findIndex($scope.products, ['id', product.id]), 1, product);
                    $scope.cart.push(product);
                    $scope.closeProductDetails();
                    Materialize.toast('<i class="icon ion-ios-cart-outline"></i> Item added to basket', 4000)
                };

                $scope.makePayment = function () {
                    appService.Loading('show');
                    $timeout(function () {
                        appService.Loading();
                        $scope.goTo('tabs.thanks');
                    }, 2580);
                    Materialize.toast('<i class="icon ion-ios-checkmark-outline"></i> Payment has been successful', 4000)
                };

                $ionicModal.fromTemplateUrl('app/shop/product-preview.html', {
                    scope: $scope,
                    animation: 'fade-in-scale'
                }).then(function (modal) {
                    $scope.modalProductPreview = modal;
                });
                $scope.openProductPreview = function (item) {
                    $scope.product = item;
                    $scope.modalProductPreview.show();
                };
                $scope.closeProductPreview = function () {
                    $scope.product = undefined;
                    $scope.modalProductPreview.hide();
                };

                $ionicModal.fromTemplateUrl('app/shop/product-details.html', {
                    scope: $scope,
                    animation: 'jelly'
                }).then(function (modal) {
                    $scope.modalProductDetails = modal;
                });

                $scope.openProductDetails = function (item) {
                    $scope.modalProductDetails.show();
                };

                $scope.closeProductDetails = function () {
                    $scope.modalProductDetails.hide();
                };

                $scope.changeListType = function () {
                    if ($scope.list_type === 'list') {
                        $scope.list_type = 'grid';
                    } else if ($scope.list_type === 'grid2') {
                        $scope.list_type = 'list';
                    }
                    else $scope.list_type = 'grid2';
                }
            }

            // calendar
            function initCalendar() {
                $scope.calendarView = 'month';
                $scope.viewDate = new Date();
                $scope.events = $scope.notifications;

                $scope.eventClicked = function (event) {
                    //alert.show('Clicked', event);
                };

                $scope.eventEdited = function (event) {
                    //alert.show('Edited', event);
                };

                $scope.eventDeleted = function (event) {
                    //alert.show('Deleted', event);
                };

                $scope.eventTimesChanged = function (event) {
                    //alert.show('Dropped or resized', event);
                };

                $scope.toggle = function ($event, field, event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    event[field] = !event[field];
                };

                $scope.viewChangeClicked = function (nextView, date) {
                    $scope.viewDate = date;
                    $scope.seletedDateEvents = [];
                    if (nextView === 'day') {
                        angular.forEach($scope.events, function (value, key) {
                            var range = moment().range(value.startsAt, value.endsAt);
                            if (range.contains(date)) {
                                $scope.seletedDateEvents.push(value);
                            }
                        });
                        return false;
                    }
                };

                $scope.getDayEvents = function () {
                    $scope.selectedDate = new Date();
                    angular.forEach($scope.events, function (value, key) {
                        var range = moment().range(value.startsAt, value.endsAt);
                        if (range.contains(new Date())) {
                            $scope.seletedDateEvents.push(value);
                        }
                    });
                }

            }

            // conversations & chat
            function initChat() {
                $scope.contactPopover = $ionicPopover.fromTemplate(contactTemplate, {
                    scope: $scope
                });

                var randomMessages = appService.getRandomMessages()
                $scope.conversations = appService.getMessages();
                var viewScroll = $ionicScrollDelegate.$getByHandle('chatScroll');
                var footerBar, scroller, txtInput;

                $scope.$on('$ionicView.beforeEnter', function () {
                    $state.is('tabs.chat') ? $scope.chat = {} : null;
                });

                $scope.$on('$ionicView.enter', function () {
                    if ($state.is('tabs.chat')) {
                        $scope.chat = {};
                        appService.Loading('show');
                        if ($stateParams.chat == null) {
                            $scope.chat = appService.getRandomObject($scope.conversations);
                        } else {
                            if ($stateParams.chat.conversation) {
                                $scope.chat = _.find($scope.conversations, ['conversation', $stateParams.chat.conversation]);
                            } else {
                                $scope.chat = {
                                    conversation: $scope.conversations.length + 1,
                                    recepientid: $stateParams.chat.id,
                                    recepientname: $stateParams.chat.name,
                                    recepientphoto: $stateParams.chat.photo,
                                    messages: []
                                }
                            }

                        }
                        $timeout(function () {
                            appService.Loading();
                        }, 250);

                        $timeout(function () {
                            viewScroll.scrollBottom(true);
                            footerBar = document.body.querySelector('#chat .bar-footer');
                            scroller = document.body.querySelector('#chat .scroll-content');
                        }, 0);
                    }
                });

                $scope.sendChat = function (item) {
                    appService.KeepKeyboardOpen('#textChat');
                    var message = {
                        sentAt: new Date(),
                        name: $rootScope.user.name,
                        photo: $rootScope.user.photo,
                        text: item,
                        senderid: $rootScope.user.id
                    };

                    $timeout(function () {
                        $scope.chat.messages.push(message);
                        appService.KeepKeyboardOpen('#textChat');
                        viewScroll.scrollBottom(true);
                    }, 0);

                    $scope.input = '';

                    $timeout(function () {
                        $scope.chat.messages.push({
                            sentAt: new Date(),
                            name: $scope.chat.recepientname,
                            photo: $scope.chat.recepientphoto,
                            text: randomMessages[Math.floor(Math.random() * randomMessages.length)],
                            senderid: $scope.chat.recepientid
                        });

                        appService.KeepKeyboardOpen('#textChat');
                        viewScroll.scrollBottom(true);
                    }, 2000);
                }

                $scope.onMessageHold = function (e, itemIndex, chat) {

                    $ionicActionSheet.show({
                        buttons: [{
                            text: 'Copy Text'
                        }, {
                                text: 'Delete Message'
                            }],
                        buttonClicked: function (index) {
                            switch (index) {
                                case 0:
                                    $cordovaClipboard.copy(chat.text).then(function () {
                                    }, function () {
                                    });
                                    break;
                                case 1:
                                    $scope.chat.messages.splice(itemIndex, 1);
                                    $timeout(function () {
                                        viewScroll.resize();
                                    }, 0);
                                    break;
                            }
                            return true;
                        }
                    });
                };

                $scope.sendPhoto = function () {
                    var message = {
                        sentAt: new Date(),
                        name: $rootScope.user.name,
                        photo: $rootScope.user.photo,
                        senderid: $rootScope.user.id
                    };
                    $ionicActionSheet.show({
                        buttons: [{
                            text: 'Take Picture'
                        }, {
                                text: 'Select From Gallery'
                            }],
                        buttonClicked: function (index) {
                            switch (index) {
                                case 0: // Take Picture
                                    document.addEventListener("deviceready", function () {
                                        $cordovaCamera.getPicture(appService.getCameraOptions()).then(function (imageData) {
                                            message.text = '<img src="' + "data:image/jpeg;base64," + imageData + '" style="max-width: 300px">';
                                            $timeout(function () {
                                                $scope.chat.messages.push(message);
                                                viewScroll.scrollBottom(true);
                                            }, 0);
                                        }, function (err) {
                                            appService.showAlert('Error', err, 'Close', 'button-assertive', null);
                                        });
                                    }, false);
                                    break;
                                case 1: // Select From Gallery
                                    document.addEventListener("deviceready", function () {
                                        $cordovaCamera.getPicture(appService.getLibraryOptions()).then(function (imageData) {
                                            message.text = '<img src="' + "data:image/jpeg;base64," + imageData + '" style="width: 500px;height:500px">';
                                            $timeout(function () {
                                                $scope.chat.messages.push(message);
                                                viewScroll.scrollBottom(true);
                                            }, 0);
                                        }, function (err) {
                                            appService.showAlert('Error', err, 'Close', 'button-assertive', null);
                                        });
                                    }, false);
                                    break;
                            }
                            return true;
                        }
                    });
                };

                // I emit this event from the monospaced.elastic directive, read line 480
                //add the following after line 168 of lib/angular-elastic/elastic.js
                //scope.$emit('taResize', $ta); 
                $scope.$on('taResize', function (e, ta) {
                    console.log('taResize');
                    if (!ta) return;

                    var taHeight = ta[0].offsetHeight;
                    console.log('taHeight: ' + taHeight);

                    if (!footerBar) return;

                    var newFooterHeight = taHeight + 30;
                    newFooterHeight = (newFooterHeight > 44) ? newFooterHeight : 44;

                    footerBar.style.height = newFooterHeight + 'px';
                    scroller.style.bottom = newFooterHeight + 'px';
                });
            }




        })



})();

moment.locale('en', {
    calendar: {
        lastDay: '[Yesterday]',
        sameDay: '[Today]',
        nextDay: '[Tomorrow, ] dddd Do MMM',
        lastWeek: '[Last] dddd Do MMM',
        nextWeek: 'dddd Do MMM',
        sameElse: 'L'
    }
})

var searchTemplate =
    '<ion-popover-view class="search">' +
    '<ion-content scroll="false">' +
    '<div class="list item-input-inset">' +
    '<label class="item-input-wrapper">' +
    '<i class="icon ion-ios-search placeholder-icon"></i>' +
    '<input type="search" placeholder="Search" ng-model="schoolSearch" ng-model-options="{ debounce: 550 }" ng-change="getSearch(schoolSearch)"></label>' +
    ' <i class="icon ion-close" ng-show="schoolSearch" ng-click="getSearch(\'\');popover.hide($event);schoolSearch=\'\'"></i>' +
    '</div>' +
    '</ion-content>' +
    '</ion-popover-view>';
var contactTemplate =
    '<ion-popover-view class="right large">' +
    '<ion-content>' +
    '<div class="list">' +
    '<div class="item item-avatar item-text-wrap" ng-click="contactPopover.hide($event);"ng-repeat="contact in contacts" ui-sref="tabs.chat({chat: contact})">' +
    '<img ng-src="{{contact.photo}}">' +
    '<h2 class="dark font-thin">{{contact.name}}</h2>' +
    '<p class="dark font-thin">{{contact.subject}}</p>' +
    '</div>' +
    '</div>' +
    '</ion-content>' +
    '</ion-popover-view>';

var newsTemplate =
    '<ion-popover-view class="medium right">' +
    '<ion-content>' +
    '<div class="list">' +
    '<div class="item item-icon-left item-text-wrap" ng-click="newsPopover.hide($event);">' +
    '<i class="icon ion-ios-paper-outline"></i>Share Item' +
    '</div>' +
    '<div class="item item-icon-left item-text-wrap" ng-click="newsPopover.hide($event);">' +
    '<i class="icon ion-ios-camera-outline"></i>Share Photo' +
    '</div>' +
    '<div class="item item-icon-left item-text-wrap" ng-click="newsPopover.hide($event);">' +
    '<i class="icon ion-ios-bell-outline"></i>Share Event' +
    '</div>' +
    '<div class="item item-icon-left item-text-wrap" ng-click="newsPopover.hide($event);">' +
    '<i class="icon ion-ios-musical-notes"></i>Share Voicenote' +
    '</div>' +
    '<div class="item item-icon-left item-text-wrap" ng-click="newsPopover.hide($event);">' +
    '<i class="icon ion-ios-location-outline"></i>Share Location' +
    '</div>' +
    '</div>' +
    '</ion-content>' +
    '</ion-popover-view>';

var reminderTemplate =
    '<ion-popover-view class="small center">' +
    '<ion-content>' +
    '<div class="list">' +
    '<div class="item item-text-wrap padding item-icon-left" ng-click="reminderPopover.hide($event);" ui-sref="create-edit-reminder({reminder: null, type: \'Add Call\'})"><i class="icon ion-ios-telephone-outline"></i>Add Call</div>' +
    '<div class="item item-text-wrap padding item-icon-left" ng-click="reminderPopover.hide($event);" ui-sref="create-edit-reminder({reminder: null, type: \'Add Email\'})"><i class="icon ion-ios-at"></i>Add Email</div>' +
    '<div class="item item-text-wrap padding item-icon-left" ng-click="reminderPopover.hide($event);" ui-sref="create-edit-reminder({reminder: null, type: \'Add Task\'})"><i class="icon ion-ios-checkmark-outline"></i>Add Task</div>' +
    '<div class="item item-text-wrap padding item-icon-left" ng-click="reminderPopover.hide($event);" ui-sref="create-edit-reminder({reminder: null, type: \'Add Event\'})"><i class="icon ion-ios-calendar-outline"></i>Add Event</div>' +
    '</div>' +
    '</ion-content>' +
    '</ion-popover-view>';

var customerTemplate =
    '<ion-modal-view class="ion-modal">' +
    '<ion-header-bar>' +
    '<h1 class="title">{{product.name}}</h1>' +
    '<button class="button button-icon icon ion-android-close" ng-click="closeModalCustomer();"></button>' +
    '</ion-header-bar>' +
    '<ion-content class="padding shop">' +
    '<label class="item item-input item-select">' +
    '<div class="input-label">Size:</div>' +
    '<select ng-options="size for size in sizes" ng-model="product.size"><option value="">Select Size</option> </select>' +
    '</label>' +
    '<label class="item item-input">' +
    '<span class="input-label">Amount:</span>' +
    '<input type="number" ng-model="product.amount">' +
    '</label>' +
    '<button class="button waves-effect waves-teal button-balanced button-outline button-block" ng-click="addToCartComplete(product);">Save</button>' +
    '</ion-content>' +
    '</ion-modal-view>';


