"use strict";
const requestP = require("request-promise-native");
const tokenService = require("./tokenService");
function baseService() {
    function sendRequest() {
        return new Promise((resolve, reject) => {
            tokenService.getToken().then(authen => {
                this.request.headers = this.request.headers || {};
                this.request.headers.authorization = `${authen.token_type} ${authen.access_token}`;
                return requestP(this.request).then(result => {
                    result.token = authen.access_token;
                    resolve(result);
                }, err => {
                    // console.error(err);
                    reject(err);
                });
            });
        });
    }
    return {
        name: "baseService",
        sendRequest: sendRequest
    };
}

module.exports = baseService();