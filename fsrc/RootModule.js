"use strict";
import "bootstrap/dist/css/bootstrap.css";
import angular from "angular";
require("angular-sanitize");
require("angular-animate");
require("angular-touch");
require("angular-ui-router");
require("angular-ui-bootstrap");
require("./common/CommonModule");
angular.module("RootModule", [
    "ngSanitize", "ngAnimate", "ngTouch", "ui.router", "ui.bootstrap", "CommonModule"
]);
require("./common/routeConfig");
require("./common/rootCtrl");
// import routeConfig from "common/routeConfig";
