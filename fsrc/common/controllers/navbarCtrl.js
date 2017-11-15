"use strict";
(function () {
    navbarCtrl.$inject = ["$scope", "$http", "CONSTANTS"];
    function navbarCtrl($scope, $http, CONSTANTS) {
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
    angular.module("RootModule").controller("navbarCtrl", navbarCtrl);
})();