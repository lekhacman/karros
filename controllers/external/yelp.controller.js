"use strict";
const searchService = require("../../services/yelp/yelpSearchService");

function autocomplete(req, res, next) {
    searchService.autocomplete(req.query).then(data => {
        res.json(data);
    }, err => {
        next(err);
    });
}
function search(req, res, next) {

}
module.exports = {
    autocomplete: autocomplete,
    search: search
};