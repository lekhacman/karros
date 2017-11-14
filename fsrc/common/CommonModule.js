"use strict";

(function () {
    angular.module("CommonModule", []);
    const constants = {
        YELP:{

        },
        GOOGLE:{
            KEY: "AIzaSyB-auXZoXF0zQGLgfhMBoJVc_jFywT35hk",
            URL: "https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyB-auXZoXF0zQGLgfhMBoJVc_jFywT35hk&input="
        }
    };
    angular.module("CommonModule").constant("CONSTANTS", constants);
})();