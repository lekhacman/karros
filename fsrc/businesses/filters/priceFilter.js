"use strict";
(function () {
    function price() {
        return function (bs, input) {
            if (!input || !input.price) {
                return bs;
            }
            let output = [];
            for (let b of bs) {
                if(b.price === input.price) {
                    output.push(b);
                }
            }
            return output;
        }
    }
    angular.module("RootModule").filter("price", price);
})();