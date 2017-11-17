"use strict";
(function () {
    function price() {
        return function (bs, input) {
            if (!input || !input.price) {
                return bs;
            }
            return bs.filter((b) => {
                return b.price === input.price;
            });
        }
    }
    angular.module("RootModule").filter("price", price);
})();