(function (root) {
    'use strict';

    class EntryModel {
        constructor(data) {
            this.id = data.id || root.uuid.v4();
        }

        toJSON() {
            throw new Error('Must implement');
        }
    }

    root.blog.models.EntryModel = EntryModel;
}(window));
