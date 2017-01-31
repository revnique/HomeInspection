"use strict";
app.factory("httpService", [
    "$http", "$window", "$q",
    function($http, $window, $q) {
        var svc = {};
        svc.root = location.href.indexOf('localhost:') > -1 ? 'http://localhost:51985/' : 'https://approvals.h1teq.com/';

        svc.makeRequest = function(method, url, model, errorMsg, config) {
            if (config == undefined) {
                config = {};
            }
            var deferred = $q.defer();
            model = typeof model === 'string' ? '"' + model + '"' : model; //prevents null when sending strings to an api function with FromBody http://stackoverflow.com/questions/25114291/angular-post-request-to-a-asp-net-web-api-server
            method(url, model, config)
                .then(function(response) {
                    deferred.resolve(response.data); // extract the data as the caller does not need to know about the response
                })
                .catch(function(response) {
                    return processResponse(response, errorMsg).then(function(data) {
                        deferred.reject(data);
                    });
                });
            return deferred.promise;
        }

        function processResponse(response, message) {
            var retVal = response;
            var deferred = $q.defer();

            if (isValidationResponse(response)) {
                svc.logError(message + ': ' + response.data.Message, response.data);
                retVal = response.data;
                if (typeof retVal !== 'object') {
                    retVal = {};
                    retVal[data] = response.data;
                }
                retVal.errorType = errorTypes.Validation;
            } else if (isNoResponse(response)) {
                $rootScope.$broadcast("globalerror", response);
                svc.logError(message + ': The server did not respond.');
                retVal = response.data;
            } else if (response.statusText === 'Forbidden' && response.data && app.utils.isJsonString(response.data)) {
                retVal.errorType = errorTypes.Violation;
                retVal.data = JSON.parse(response.data);
            } else if (response.status === 404) {
                retVal = response; // let the caller handle the 404, because the caller might expect the 'not found'
            } else {
                if (response.data == null && response.status === -1) {
                    svc.logError(message + ': GET request was prevented. If this is CORS error it may also be a 404 in disguise so check the route.');
                } else {
                    svc.logError(message + ': ' + response.statusText, response);
                }
            }

            if (typeof retVal !== 'object')
                retVal = {};
            if (!retVal.errorType)
                retVal.errorType = errorTypes.Unknown;

            deferred.resolve(retVal);
            return deferred.promise;
        }

        function isValidationResponse(response) {
            return response.status && response.status === 400;
        }

        function isNoResponse(response) {
            return response.status === 0 && response.statusText === "";
        }

        svc.logError = function(err) {
            console.log(err);
        }
        return svc;
    }
]);