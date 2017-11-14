"use strict";
var express = require('express');
var router = express.Router();
const request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
});
router.get("/search", (req, res, next) => {
    let url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyB-auXZoXF0zQGLgfhMBoJVc_jFywT35hk&input=" + req.param("place");
    request(url, (err, response, body) => {
        // console.log(body);
        res.json(JSON.parse(body));
    });
});

module.exports = router;
