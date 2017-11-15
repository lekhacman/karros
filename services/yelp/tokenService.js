"use strict";
const requestP = require("request-promise-native");
const config = require("../../resources/config");

function tokenServices() {
    let token;

    function getToken() {
        if (token) {
            return new Promise(resolve => {
                resolve(token);
            });
        }
        let yelpConfig = config.externalApi.yelp;
        let options = {
            method: "POST",
            url: yelpConfig.oauth.url,
            qs: {
                "grant_type": "client_credentials",
                "client_id": yelpConfig.clientId,
                "client_secret": yelpConfig.clientSecret
            },
            json: true
        };
        return new Promise((resolve, reject) => {
            requestP(options).then(authen => {
                token = authen;
                resolve(authen);
            }, err => {
                reject(err);
            });
        });
    }

    return {
        getToken: getToken
    };
}
module.exports = tokenServices();