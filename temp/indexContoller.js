'use strict';

(function () {

    var controllerId = "IndexController";

    //States
    app.config([
        '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            /////////////////////////////
            // Redirects and Otherwise //
            /////////////////////////////
            $urlRouterProvider
                // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                .otherwise("/");

            $stateProvider
                .state("home", {
                    url: '/',
                    templateUrl: 'pages/home.html'
                });
        }
    ]);

    app.controller(controllerId, ["$rootScope",
        "$scope",
        "$timeout",
        "$stateParams",
        "$state",
        "$http",
        IndexController
    ]);

    function IndexController($rootScope,
        $scope,
        $timeout,
        $stateParams,
        $state,
        $http) {
        var vm = this;
        vm.token = 'xoxp-53073755459-53114600822-88563026849-2ff4db3175a5194af8129d7b5c4f6b0c';
        vm.root = location.href.indexOf('localhost:') > -1 ? 'http://localhost:51985/' : 'https://demo.com/';
        vm.apiRoot = location.href.indexOf('localhost:') > -1 ? 'http://localhost:51985/api/proof/' : 'https://demo.com/api/proof/';
        vm.apiRootUser = location.href.indexOf('localhost:') > -1 ? 'http://localhost:51985/api/user/' : 'https://demo.com/api/user/';


        $rootScope.$broadcast('isInTagMode', { isInTagMode: vm.isInTagMode, overlayHeight: vm.overlayHeight });

        $rootScope.$on('isInTagMode', function (event, payload) {
            vm.isInTagMode = payload.isInTagMode;
            vm.overlayHeight = payload.overlayHeight;
        });


        $rootScope.$on('vm.selectedHistoryItemEvent', function (event, payload) {
            vm.selectedHistoryItem = payload.selectedHistoryItem;
            //$("#listItems").dragend();
        });


        //$rootScope.$broadcast('vm.selectedHistoryItemEvent', { selectedHistoryItem: item });


        vm.cancelTagging = function() {
            $rootScope.$broadcast('cancelTagModeEvent', {});
        };

        vm.selectTag = function (tag) {
            vm.selectedComment = tag;
            $rootScope.$broadcast('tagSelectedEvent', tag);
        };

        vm.title = "Company Name";
        $rootScope.$on('titleChanged', function (event, payload) {
            vm.title = payload.title;
        });
        
        vm.getUsers = function () {
            var data = {};
            $http.get(vm.apiRootUser + 'list', data)
                .success(function (response) {
                    $rootScope.users = {
                        "options": [
                        ],
                        "selectedItem": {}
                    }
                    angular.forEach(response, function (item) {
                        item.name = item.UserName;
                        item.value = item.UserId;
                    });
                    $rootScope.users.options = response;
                    $rootScope.users.selectedItem = $rootScope.users.options[0];
                }).error(function (response) {
                    // Show user error message and clear form
                    vm.error = response.message;
                });
        };

        vm.zoomInOut = function ($event, direction) {
            $event.preventDefault();

            var auditObj = {
                direction: direction,
                pageX:$event.pageX,
                pageY:$event.pageY
            }

            $rootScope.$broadcast('zoomInOutEvent', auditObj);
        };




        //var url = string.Format("{0}/alpha/h.html#/proof/{1}", Request.RequestUri.GetLeftPart(UriPartial.Authority), proofCommentRequest.ApprovalId);
        //var msg = string.Format("Approval for design &quot;<a href='{1}'>{2}</a>&quot; has been handed off by &quot;{3}&quot;",
        //                "revnique", url, "this is from signalr", "guest");
        vm.notifications = [];
        vm.notifications.push(new Notification("Handoff","aaa","this is a title","dtown","auser111","google.com"));
       

        document.addEventListener('notifierHubSendEvent', function (e) {
            console.log("notifierHubSendEvent", e);
            $timeout(function () {
                vm.notifications.push(e.detail.message);
            }, 250);
            console.log("notifierHubSendEvent e.detail.message", e.detail.message);
        }, false);

        vm.logout = function ($event) {
            $event.preventDefault();
            app.utils.expireCookie("approvals.h1teq.token");
            app.utils.expireCookie("approvals.h1teq.user");
            location.href = "login.html";
        };

        vm.init = function () {
            vm.getUsers();
        };
        var activate = function () {
            vm.init();
        }
        activate();
    };

    function Notification(type, approvalId, title, userName, userId, url) {
        var _type = type, _approvalId=approvalId, _title=title, _userName=userName, _userId=userId, _url=url;
        Object.defineProperties(this, {
            'type': {
                get: function () {
                    return _type;
                },
                set: function (value) { _type = value; }
            },
            'approvalId': {
                get: function () {
                    return _approvalId;
                },
                set: function (value) { _approvalId = value; }
            },
            'title': {
                get: function () {
                    return _title;
                },
                set: function (value) { _title = value; }
            },
            'userName': {
                get: function () {
                    return _userName;
                },
                set: function (value) { _userName = value; }
            },
            'userId': {
                get: function () {
                    return _userId;
                },
                set: function (value) { _userId = value; }
            },
            'url': {
                get: function () {
                    return _url;
                },
                set: function (value) { _url = value; }
            }
        });
    }
})();
