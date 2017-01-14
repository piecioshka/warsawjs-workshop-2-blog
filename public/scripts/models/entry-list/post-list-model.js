(function (root) {
    'use strict';

    let EntryListModel = root.blog.models.EntryListModel;

    class PostListModel extends EntryListModel {
        constructor(...args) {
            super(...args)
        }
    }

    root.blog.models.PostListModel = PostListModel;
}(window));
