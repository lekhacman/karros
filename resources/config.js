"use strict";

function externalApiConfig() {
    return {
        google: {
            place: {
                url: "https://maps.googleapis.com/maps/api/place/autocomplete/json",
                key: "AIzaSyB-auXZoXF0zQGLgfhMBoJVc_jFywT35hk"
            }
        },
        yelp: {
            clientId: "MF_G86ljZUbeWAsqicPgbg",
            clientSecret: "qjxvGtEQQPaCSbFiQ8dm4WwGbBvtXbBaBZETb2KUZNEjqphLOainZnxgtAMaAiSX",
            oauth: {
                url: "https://api.yelp.com/oauth2/token"
            },
            autocomplete: {
                url: "https://api.yelp.com/v3/autocomplete"
            },
            search: {
                url: "https://api.yelp.com/v3/businesses/search"
            }
        }
    };
}


/*==========================================================*/
const config = {
    externalApi: externalApiConfig()
};
module.exports = config;