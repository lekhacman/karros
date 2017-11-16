"use strict";
import CryptoJS from "crypto-js";
(function () {
    businessesCtrl.$inject = ["$scope", "$stateParams", "$http", "CONSTANTS", "CacheFactory"];
    function businessesCtrl($scope, $stateParams, $http, CONSTANTS, CacheFactory) {
        class queryModel {
            constructor(term, location){
                this.term = term;
                this.location = location;
            }
            get id() {
                let hash = CryptoJS.SHA1(JSON.stringify({term: this.term, location: this.location}));
                return hash.toString(CryptoJS.enc.Hex);
            }
        }
        function hashObj(obj) {
            return window.btoa(JSON.stringify(obj));
        }
        function searchBusinesses(offset) {
            let query = new queryModel($stateParams.term, $stateParams.location);
            let id = query.id;
            const config = {
                params: {
                    term: $stateParams.term,
                    location: $stateParams.location,
                    offset: offset
                }
            };
            if (CacheFactory.search.businessData.hasOwnProperty(id) && CacheFactory.search.businessData[id].hasOwnProperty(offset)) {
                return new Promise(resolve => {
                    let cachedResult = CacheFactory.search.businessData[id][offset];
                    $scope.businesses = cachedResult.businesses;
                    $scope.totalBusinesses = (cachedResult.total > 1000) ? 1000 : result.total;
                    resolve(cachedResult);
                });
            } else {
                return $http.get(CONSTANTS.YELP.SEARCH.URL, config).then(data => {
                    let result = data.data;
                    CacheFactory.search.businessData[id] = CacheFactory.search.businessData[id] || {};
                    CacheFactory.search.businessData[id][offset] = result;
                    $scope.businesses = result.businesses;
                    // Yelp API does not allow offset > 1000
                    $scope.totalBusinesses = (result.total > 1000) ? 1000 : result.total;
                    return result;
                }, err => {
                    console.error(err);
                });
            }
        }
        // Init stage: search businesses
        searchBusinesses(0);
        $scope.currentPage = 1;
        $scope.maxSize = 5;
        $scope.pageChanged = function() {
            console.log('Page changed to: ' + $scope.currentPage);
            searchBusinesses(($scope.currentPage - 1) * 10);
        };
    }
    angular.module("RootModule").controller("businessesCtrl", businessesCtrl);
})();