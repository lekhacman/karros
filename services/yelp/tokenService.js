"use strict";
const request = require("request");
const requestP = require("request-promise");
const config = require("../../resources/config");

function tokenServices() {
    function getToken() {
        let yelpConfig = config.externalApi.yelp;
        let url = `${yelpConfig.oauth.url}?grant_type=client_credentials&client_id=${yelpConfig.clientId}&client_secret=${yelpConfig.clientSecret}`;
        return requestP.post(url);
    }
    return {

    };
}
module.exports = tokenServices();