'use strict';

angular.module('inspections').factory('InspectionService', ['$q', '$http',
  function ($q, $http) {
      var svc = {};

      svc.listInpsectionTemplate = function (data) {
          var deferred = $q.defer();
          
          console.log(" listInpsectionTemplate data", data);
          $http.get("/api/inspectiontemplate/", data)
             .success(function (data, status) {
                 deferred.resolve(data);
             }).error(function (data, status, headers, config) {
                 var err = buildErrorResponse(data, status, headers, config);
                 err.detailedErrorMessage = "Error fetching listInpsectionTemplate.";
                 console.log(err);
                 deferred.reject(err);
             });

          return deferred.promise;
      };



      svc.buildErrorResponse = function (data, status, headers, config) {
          var statusCode = status || "Unknown";
          var rtn = {
              data: data || {},
              status: status || {},
              headers: headers || {},
              config: config || {},
              isAuthenticated: true,
              simpleErrorMessage: statusCode + " error has occured.",
              detailedErrorMessage: ""
          };
          return rtn;
      };

      return svc;
  }
]);
