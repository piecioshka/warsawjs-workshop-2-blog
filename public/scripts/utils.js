(function (root) {
    'use strict';

    function assert(cond, msg) {
        if (!cond) throw new Error(msg || 'AssertionError');
    }

    function makeRequest(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
            callback(xhr.response);
        });
        xhr.send();
    }

    function randomInteger() {
        return parseInt(Math.random() * 10000);
    }

    root.blog.utils = {
        assert: assert,
        makeRequest: makeRequest,
        randomInteger: randomInteger
    };
}(window));
