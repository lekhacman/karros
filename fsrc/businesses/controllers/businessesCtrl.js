"use strict";
(function () {
    businessesCtrl.$inject = ["$scope", "$http", "CONSTANTS"];
    function businessesCtrl($scope, $http, CONSTANTS) {
        $scope.goHome = function goHome() {
            window.location = "/";
        };
        $scope.changeLanguage = function (lang) {
            // $translate.use(lang);
        };
        $scope.search = function () {
            console.log($scope.location);
            console.log($scope.keyword);
        };
    }
    angular.module("RootModule").controller("businessesCtrl", businessesCtrl);
})();