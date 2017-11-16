"use strict";

(function () {
    angular.module("CommonModule", []);
    const constants = {
        YELP:{
            SEARCH: {
                URL: "yelp/search"
            }
        },
        GOOGLE:{
        }
    };
    angular.module("CommonModule").constant("CONSTANTS", constants);
})();