"use strict";
const request = require("request");
const requestP = require("request-promise");
const config = require("../../resources/config");

function tokenServices() {
    function getToken() {
        let yelpConfig = config.externalApi.yelp;
        let url = `${yelpConfig.oauth.url}?grant_type=client_credentials&client_id=${yelpConfig.clientId}&client_secret=${yelpConfig.clientSecret}`;
        let options = {
            method: "POST",
            url: yelpConfig.oauth.url,
            qs: {
                "grant_type": "client_credentials",
                "client_id": yelpConfig.clientId,
                "client_secret": yelpConfig.clientSecret
            }
        };
        return requestP(options);
    }

    return {
        getToken: getToken
    };
}
module.exports = tokenServices();