"use strict";
(function () {
    routeConfig.$inject = ["$stateProvider", "$urlRouterProvider", "CONSTANTS"];
    function routeConfig($stateProvider, $urlRouterProvider, CONSTANTS) {
        // ===============Configurations===============


        // ===============States===============
        let home = {
            name: "home",
            url: "/",
            templateUrl: "app/common/templates/home.html"
        };
        let businesses = {
            name: "businesses",
            url: "/businesses?term&location",
            templateUrl: "app/businesses/templates/businesses.html",
            controller: "businessesCtrl"
        };

        // ===============States Registration===============
        $stateProvider.state(home)
            .state(businesses);
        // Fallback
        $urlRouterProvider.otherwise("/");
    }

    angular.module("RootModule").config(routeConfig);
})();