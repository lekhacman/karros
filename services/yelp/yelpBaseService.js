"use strict";
const requestP = require("request-promise-native");
const tokenService = require("./tokenService");
function baseService() {
    function sendRequest() {
        return new Promise((resolve, reject) => {
            if (!this.request.headers || !this.request.headers.authorization) {
                tokenService.getToken().then(authen => {
                    this.request.headers.authorization = `${authen.token_type} ${authen.access_token}`;
                    return requestP(this.request).then(result => {
                        result.token = authen.access_token;
                        resolve(result);
                    }, err => {
                        console.error(err);
                        reject(err);
                    });
                });
            } else {
                return requestP(this.request).then(result => {
                    resolve(result);
                }, err => {
                    console.error(err);
                    reject(err);
                });
            }
        });
    }
    return {
        name: "baseService",
        request: {},
        sendRequest: sendRequest
    };
}

module.exports = baseService();