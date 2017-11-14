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
    }
    angular.module("RootModule").controller("navbarCtrl", navbarCtrl);
})();