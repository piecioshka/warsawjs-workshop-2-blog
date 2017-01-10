(function (root) {
    'use strict';

    let PostsService = root.blog.services.PostsService;
    let runtime = root.blog.runtime;
    let constants = root.blog.constants;
    let Post = root.blog.models.Post;

    class PostList {
        constructor(postList) {
            this.posts = [];
            postList.forEach(this.createPost, this);

            runtime.on(constants.post.NEW_POST, (post) => {
                this.createPost(post);
            });
        }

        createPost(post) {
            console.log('PostList#createPost', post);

            post.id = this.posts.length;
            this.posts.push(post);

            new Post(post).render();

            PostsService.save(this.posts);
        }
    }

    root.blog.models.PostList = PostList;
}(window));
