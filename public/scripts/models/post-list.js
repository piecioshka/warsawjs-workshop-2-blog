(function (root) {
    'use strict';

    class PostList {
        constructor() {
            this.posts = [];
        }

        addPostModel(postModel) {
            this.posts.push(postModel);
        }

        toJSON() {
            return this.posts.map((postModel) => postModel.toJSON());
        }
    }

    root.blog.models.PostList = PostList;
}(window));
