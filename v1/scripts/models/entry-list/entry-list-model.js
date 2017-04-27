(function (root) {
    'use strict';

    class EntryListModel {
        constructor() {
            this.entries = [];
        }

        addEntry(entry) {
            this.entries.push(entry);
        }

        removeEntry(entryId) {
            let entryIndex = this.entries.findIndex((entry) => {
                return entry.id === entryId;
            });

            this.entries.splice(entryIndex, 1);
        }

        getEntry(postId) {
            return this.entries.find((entry) => {
                return entry.id === postId;
            });
        }

        clear() {
            this.entries.length = 0;
        }

        each(callback) {
            this.entries.forEach(callback);
        }

        toJSON() {
            return this.entries.map((entry) => entry.toJSON());
        }
    }

    root.blog.models.EntryListModel = EntryListModel;
}(window));
