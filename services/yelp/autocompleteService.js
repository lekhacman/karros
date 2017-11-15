"use strict";
const yelpBaseService = require("./yelpBaseService");
const config = require("../../resources/config");

function autocomplete(text) {
    const autocompleteConfig = config.externalApi.yelp.autocomplete;
    const service = Object.create(yelpBaseService);
    service.name = "autocompleteService";
    service.request = {
        method: "GET",
        json: true,
        url: autocompleteConfig.url,
        qs: {
            text: text,
        },
        headers: service.headers || {}
    };
    return service.sendRequest();
}

module.exports = {
    search: autocomplete
};