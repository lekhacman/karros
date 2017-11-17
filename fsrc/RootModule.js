"use strict";
import "bootstrap/dist/css/bootstrap.css";
import "angucomplete-alt/angucomplete-alt.css";
import angular from "angular";
require("angular-sanitize");
require("angular-animate");
require("angular-touch");
require("angular-ui-router");
require("angular-ui-bootstrap");
require("angucomplete-alt");
require("./common/CommonModule");
require("./common/factories/CommonBaseFactory");
require("./common/factories/CommonFactory");
require("./common/factories/CacheFactory");
angular.module("RootModule", [
    "ngSanitize", "ngAnimate", "ngTouch", "ui.router", "ui.bootstrap", "angucomplete-alt",
    "CommonModule"
]);
require("./common/routeConfig");
require("./common/controllers/rootCtrl");
require("./common/controllers/navbarCtrl");
require("./businesses/controllers/businessesCtrl");
require("./businesses/filters/priceFilter");