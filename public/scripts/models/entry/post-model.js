(function (root) {
    'use strict';

    let assert = root.blog.utils.assert;
    let CommentListModel = root.blog.models.CommentListModel;
    let EntryModel = root.blog.models.EntryModel;
    let CommentModel = root.blog.models.CommentModel;

    class PostModel extends EntryModel {
        constructor(data) {
            super(data);

            assert(typeof data.title === 'string');
            assert(typeof data.body === 'string');

            this.title = data.title;
            this.body = data.body;

            let comments = (data.comments || []).map((comment) => {
                return new CommentModel(comment);
            });

            this.comments = new CommentListModel(comments);
        }

        toJSON() {
            return {
                id: this.id,
                title: this.title,
                body: this.body,
                comments: this.comments.toJSON()
            }
        }
    }

    root.blog.models.PostModel = PostModel;
}(window));
