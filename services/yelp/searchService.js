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
            location: params.location
        },
        headers: service.headers || {}
    };
    return service.sendRequest();
}

module.exports = {
    search: search
};