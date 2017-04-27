(function (root) {
    'use strict';

    class StorageService {
        constructor(key) {
            this.key = key;
        }

        setAdapter(adapter) {
            this._adapter = new adapter(this.key);
        }

        fetch(callback) {
            this._adapter.get(callback);
        }

        save(data, callback) {
            this._adapter.set(data, callback);
        }
    }

    root.blog.services.StorageService = StorageService;
}(window));
