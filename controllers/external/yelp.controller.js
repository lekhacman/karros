"use strict";
const autocompleteService = require("../../services/yelp/autocompleteService");

function autocomplete(req, res, next) {
    autocompleteService.search(req.param("text")).then(data => {
        res.json(data);
    }, err => {
        next(err);
    });
}
module.exports = {
    autocomplete: autocomplete
};