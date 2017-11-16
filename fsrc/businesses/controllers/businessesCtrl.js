"use strict";
(function () {
    businessesCtrl.$inject = ["$scope", "$stateParams", "$http", "CONSTANTS", "CacheFactory"];
    function businessesCtrl($scope, $stateParams, $http, CONSTANTS, CacheFactory) {
        // Init stage: search businesses
        function searchBusinesses(offset) {
            console.log($scope.location);
            console.log($scope.keyword);
            const config = {
                params: {
                    term: $stateParams.term,
                    location: $stateParams.location,
                    offset: offset
                }
            };
            if (CacheFactory.search.businessData.hasOwnProperty(offset)) {
                return new Promise(resolve => {
                    let cachedResult = CacheFactory.search.businessData[offset];
                    $scope.businesses = cachedResult.businesses;
                    resolve(cachedResult);
                });
            } else {
                return $http.get(CONSTANTS.YELP.SEARCH.URL, config).then(data => {
                    let result = data.data;
                    CacheFactory.search.businessData[offset] = result;
                    $scope.businesses = result.businesses;
                    $scope.totalBusinesses = result.total;
                    return result;
                }, err => {
                    console.error(err);
                });
            }
        }
        searchBusinesses(0);
        $scope.currentPage = 1;
        $scope.maxSize = 10;
        $scope.pageChanged = function() {
            console.log('Page changed to: ' + $scope.currentPage);
            searchBusinesses(($scope.currentPage - 1) * 10);
        };
    }
    angular.module("RootModule").controller("businessesCtrl", businessesCtrl);
})();