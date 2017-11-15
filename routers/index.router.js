"use strict";
const express = require('express');
let router = express.Router();
const googleController = require("../controllers/external/google.controller");
const yelpController = require("../controllers/external/yelp.controller");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
});
router.get("/location", googleController.locationSearch);
router.get("/yelp/autocomplete", yelpController.autocomplete);

module.exports = router;
