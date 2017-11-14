"use strict";

(function () {
    angular.module("CommonModule", []);
    const constants = {
        YELP:{

        },
        GOOGLE:{
        }
    };
    angular.module("CommonModule").constant("CONSTANTS", constants);
})();