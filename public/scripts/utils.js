(function (root) {
    'use strict';

    function makeRequest(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
            callback(xhr.response);
        });
        xhr.send();
    }

    function assert(cond, msg) {
        if (!cond) throw new Error(msg || 'AssertionError');
    }

    root.blog.utils = {
        makeRequest: makeRequest,
        assert: assert
    };
}(window));
