"use strict";
(function () {
    function CommonBaseFactory() {
        return {
            name: null
        };
    }
    CommonBaseFactory.$inject = [];
    angular.module("CommonModule").factory("CommonBaseFactory", CommonBaseFactory);
})();