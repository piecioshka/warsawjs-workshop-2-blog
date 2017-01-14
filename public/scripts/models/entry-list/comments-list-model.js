(function (root) {
    'use strict';

    let EntryListModel = root.blog.models.EntryListModel;

    class CommentListModel extends EntryListModel {
        constructor(comments) {
            super();

            this.entries = comments;
        }
    }

    root.blog.models.CommentListModel = CommentListModel;
}(window));
