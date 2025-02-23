// ==UserScript==
// @name         Globe GFiber Bridge Hidden Config
// @namespace    http://github.com/Valdezin
// @version      1.0
// @description  reveals secret settings
// @author       Valdezin
// @match        *://192.168.254.254/Network_WAN_INTERNET_p.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function showHiddenElements() {
        document.querySelectorAll('[style*="display: none"]:not(tr *):not(.selectized):not(.selectize-control)').forEach(el => {
            el.style.removeProperty('display');
        });
    }

    function addApplyButton() {
        let button = document.createElement('button');
        button.innerText = 'Open Sesame';
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.padding = '10px 20px';
        button.style.backgroundColor = '#007bff';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.zIndex = '1000';

        button.addEventListener('click', showHiddenElements);
        document.body.appendChild(button);
    }

    addApplyButton();
})();
