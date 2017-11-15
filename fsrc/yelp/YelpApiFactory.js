"use strict";
(function () {
    function YelpApiFactory($http) {
        function autocomplete(text) {
            let options = {
                method: "GET",
                url: "/yelp/autocomplete",
                params: {
                    text: text
                }
            };
            $http(options);
        }
        return {
            name: "YelpApiFactory",
            autocomplete: autocomplete
        };
    }
    YelpApiFactory.$inject = ["$http"];
    angular.module("RootModule").factory("YelpApiFactory", YelpApiFactory);
})();