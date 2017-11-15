"use strict";
const yelpBaseService = require("./yelpBaseService");

function autocomplete() {
    const service = Object.create(yelpBaseService);
    service.name = "autocompleteService";

    return service;
}

module.exports = autocomplete();