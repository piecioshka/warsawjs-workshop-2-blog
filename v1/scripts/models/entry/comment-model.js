(function (root) {
    'use strict';

    let assert = root.blog.utils.assert;
    let EntryModel = root.blog.models.EntryModel;

    class CommentModel extends EntryModel {
        constructor(data) {
            super(data);

            assert(typeof data.body === 'string');
            assert(typeof data.postId === 'string');

            this.body = data.body;
            this.postId = data.postId;
        }

        toJSON() {
            return {
                id: this.id,
                body: this.body,
                postId: this.postId
            };
        }
    }

    root.blog.models.CommentModel = CommentModel;
}(window));
