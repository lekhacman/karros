"use strict";
const CryptoJS = require("crypto-js");
class searchModel {
    constructor(term, location){
        this.term = term;
        this.location = location;
    }
    get id() {
        let hash = CryptoJS.SHA1(JSON.stringify({term: this.term, location: this.location}));
        return hash.toString(CryptoJS.enc.Hex);
    }
}
let p = new searchModel("a", "b");
let id = p.id;
console.log(id);
