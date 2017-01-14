(function (root) {
    'use strict';

    let assert = root.blog.utils.assert;

    class PostList {
        constructor() {
            this.posts = [];
        }

        addPostModel(postModel) {
            this.posts.push(postModel);
        }

        removePostModel(postId) {
            assert(typeof postId === 'number');

            let postIndex = this.posts.findIndex((postModel) => {
                return postModel.id === postId;
            });

            this.posts.splice(postIndex, 1);
        }

        getPost(postId) {
            return this.posts.find((postModel) => {
                return postModel.id === postId;
            });
        }

        clear() {
            this.posts.length = 0;
        }

        each(callback) {
            this.posts.forEach(callback);
        }

        toJSON() {
            return this.posts.map((postModel) => postModel.toJSON());
        }
    }

    root.blog.models.PostList = PostList;
}(window));
