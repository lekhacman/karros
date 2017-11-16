"use strict";
(function () {
    businessesCtrl.$inject = ["$scope", "$stateParams", "$http", "CONSTANTS"];
    function businessesCtrl($scope, $stateParams, $http, CONSTANTS) {
        // Init stage: search businesses
        (function () {
            console.log($scope.location);
            console.log($scope.keyword);
            const config = {
                params: {
                    term: $stateParams.term,
                    location: $stateParams.location
                }
            };
            $http.get(CONSTANTS.YELP.SEARCH.URL, config).then(data => {
                console.log(data.data);
                $scope.businesses = data.data.businesses;
            }, err => {
                console.error(err);
            });
        })();

    }
    angular.module("RootModule").controller("businessesCtrl", businessesCtrl);
})();