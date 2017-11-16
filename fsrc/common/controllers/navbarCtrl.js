"use strict";
(function () {
    navbarCtrl.$inject = ["$scope", "$state"];
    function navbarCtrl($scope, $state) {
        $scope.goHome = function goHome() {
            window.location = "/";
        };
        $scope.changeLanguage = function (lang) {
            // $translate.use(lang);
        };
        $scope.search = function () {
            $state.go("businesses", {
                term: $scope.keyword.title,
                location: $scope.location.title
            });
        };
    }
    angular.module("RootModule").controller("navbarCtrl", navbarCtrl);
})();