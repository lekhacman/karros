"use strict";
(function () {
    routeConfig.$inject = ["$stateProvider", "$urlRouterProvider", "CONSTANTS"];
    function routeConfig($stateProvider, $urlRouterProvider, CONSTANTS) {
        // ===============Configurations===============


        // ===============States===============
        let home = {
            name: "home",
            url: "/",
            templateUrl: require("./templates/home.html")
        };

        // ===============States Registration===============
        $stateProvider.state(home);
        // Fallback
        $urlRouterProvider.otherwise("/");
    }

    angular.module("RootModule").config(routeConfig);
})();