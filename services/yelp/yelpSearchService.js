"use strict";
const yelpBaseService = require("./yelpBaseService");
const config = require("../../resources/config");

function search(params) {
    const searchConfig = config.externalApi.yelp.search;
    const service = Object.create(yelpBaseService);
    service.name = "searchService";
    service.request = {
        method: "GET",
        json: true,
        url: searchConfig.url,
        qs: {
            term: params.term,
            location: params.location,
            limit: 10,
            offset: params.offset
        },
        headers: service.headers || {}
    };
    return service.sendRequest();
}

function autocomplete(params) {
    const autocompleteConfig = config.externalApi.yelp.autocomplete;
    const service = Object.create(yelpBaseService);
    service.name = "autocompleteService";
    service.request = {
        method: "GET",
        json: true,
        url: autocompleteConfig.url,
        qs: {
            text: params.text,
        },
        headers: service.headers || {}
    };
    return service.sendRequest();
}

module.exports = {
    search: search,
    autocomplete: autocomplete
};