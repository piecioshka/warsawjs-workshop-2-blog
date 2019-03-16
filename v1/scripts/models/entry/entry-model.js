(function (root) {
    'use strict';

    class EntryModel {
        constructor(data) {
            this.id = data.id || root.uuid();
        }

        toJSON() {
            throw new Error('Must implement');
        }
    }

    root.blog.models.EntryModel = EntryModel;
}(window));
