"use strict";
(function () {
    MainCtrl.$inject = ["$scope", "$state"];
    function MainCtrl($scope, $state) {
        $scope.goHome = function goHome() {
            window.location = "/";
        };
        $scope.logout = function () {
            localStorage.clear();
            $state.go("iposLogin");
        };
    }
    angular.module("RootModule").controller("rootCtrl", MainCtrl);
})();