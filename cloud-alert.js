// ==UserScript==
// @name         Replace Cloud Alert Sound
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replace site alert sound with a custom file
// @match        https://opsdashboard.cloud-core.jahia.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    HTMLAudioElement.prototype.play = (function(original) {
        return function() {
            if (this.src.includes("/static/alert.ogg")) {
                console.log("Replacing sound:", this.src);
                this.src = "https://raw.githubusercontent.com/goonerish/cloud-alert/main/level-up-191997.mp3";
            }
            return original.apply(this, arguments);
        };
    })(HTMLAudioElement.prototype.play);

})();