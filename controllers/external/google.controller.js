"use strict";
const request = require("request");
const config = require("../../resources/config");

function locationSearch(req, res, next) {
    const placeConfig = config.externalApi.google.place;
    let url = `${placeConfig.url}?key=${placeConfig.key}&input=${req.query.input}`;
    request(url, (err, response, body) => {
        // console.log(body);
        if (err) {
            next(err);
        }
        res.json(JSON.parse(body));
    });
}
module.exports = {
    locationSearch: locationSearch
};