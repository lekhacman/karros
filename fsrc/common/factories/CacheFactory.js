"use strict";
(function () {
    CacheFactory.$inject = ["CommonBaseFactory"];
    function CacheFactory(CommonBaseFactory) {

        let cacheFactory = Object.create(CommonBaseFactory);
        cacheFactory.name = "CacheFactory";
        cacheFactory.search = {
            businessData: {

            }
        };

        return cacheFactory;
    }
    angular.module("CommonModule").factory("CacheFactory", CacheFactory);
})();