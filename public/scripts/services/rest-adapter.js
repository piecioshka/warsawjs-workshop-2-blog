(function (root) {
    'use strict';

    // Jeśli będziemy wykorzystać REST API to ta funkcja się przyda.
    let makeRequest = root.blog.utils.makeRequest;

    class RestAdapter {
        constructor(key) {
            this.key = key;
        }

        get() {

        }

        set(data, callback) {

        }
    }

    root.blog.adapters.RestAdapter = RestAdapter;
}(window));
