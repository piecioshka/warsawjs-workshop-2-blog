(function (root) {
    'use strict';

    function makeRequest(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
            callback(null, xhr.response);
        });
        xhr.send();
    }

    class RestAdapter {
        constructor(key) {
            this.key = key;
        }

        get(callback) {
            callback(null);
        }

        set(data, callback = Function) {
            callback(null);
        }
    }

    root.blog.adapters.RestAdapter = RestAdapter;
}(window));
