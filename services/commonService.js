/**
 * Created by mle29 on 7/3/2017.
 */
"use strict";
let baseService= require("./baseService");

let service = function () {

    let commonService = Object.create(baseService);

    commonService.name = "CommonService";

    commonService.isNotEmpty = function isNotEmpty(variable) {
        return (typeof variable !== "undefined") && (variable !== null) && (variable !== "") && (variable.length !== 0);
    };

    commonService.clone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };

    commonService.getRandomArbitrary = function (min, max) {
        return Math.random() * (max - min) + min;
    };

    return commonService;
};
module.exports = service();