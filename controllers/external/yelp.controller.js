"use strict";
const autocompleteService = require("../../services/yelp/autocompleteService");
const searchService = require("../../services/yelp/searchService");

function autocomplete(req, res, next) {
    autocompleteService.search(req.query).then(data => {
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