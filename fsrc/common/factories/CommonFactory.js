"use strict";
(function () {
    CommonFactory.$inject = ["CommonBaseFactory"];
    function CommonFactory(CommonBaseFactory) {

        let commonFactory = Object.create(CommonBaseFactory);
        commonFactory.name = "CommonFactory";

        commonFactory.getLocalIP = function () {
            return new Promise((resolve, reject) => {
                let RTCPeerConnection = /*window.RTCPeerConnection ||*/ window.webkitRTCPeerConnection || window.mozRTCPeerConnection;

                if (RTCPeerConnection) (function () {
                    let rtc = new RTCPeerConnection({iceServers:[]});
                    if (1 || window.mozRTCPeerConnection) {      // FF [and now Chrome!] needs a channel/stream to proceed
                        rtc.createDataChannel('', {reliable:false});
                    }

                    rtc.onicecandidate = function (evt) {
                        // convert the candidate to SDP so we can run it through our general parser
                        // see https://twitter.com/lancestout/status/525796175425720320 for details
                        if (evt.candidate) grepSDP("a="+evt.candidate.candidate);
                    };
                    rtc.createOffer(function (offerDesc) {
                        grepSDP(offerDesc.sdp);
                        rtc.setLocalDescription(offerDesc);
                    }, function (e) { console.warn("offer failed", e); });


                    let addrs = Object.create(null);
                    addrs["0.0.0.0"] = false;
                    function updateDisplay(newAddr) {
                        if (newAddr in addrs) return;
                        else addrs[newAddr] = true;
                        let displayAddrs = Object.keys(addrs).filter(function (k) { return addrs[k]; });
                        (displayAddrs[0]? resolve : reject)(displayAddrs[0]);
                    }

                    function grepSDP(sdp) {
                        sdp.split('\r\n').forEach(function (line) {
                            if (~line.indexOf("a=candidate")) {
                                let parts = line.split(' '),
                                    addr = parts[4],
                                    type = parts[7];
                                if (type === 'host') updateDisplay(addr);
                            } else if (~line.indexOf("c=")) {
                                let parts = line.split(' '),
                                    addr = parts[2];
                                updateDisplay(addr);
                            }
                        });
                    }

                })(); else {
                    reject();
                }
            });
        };

        commonFactory.clone = function (obj) {
            return JSON.parse(JSON.stringify(obj));
        };
        return commonFactory;
    }
    angular.module("CommonModule").factory("CommonFactory", CommonFactory);
})();