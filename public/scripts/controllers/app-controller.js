(function (root) {
    'use strict';

    let runtime = root.blog.runtime;
    let constants = root.blog.constants;
    let PostsService = root.blog.services.PostsService;

    let AddPostFormView = root.blog.views.AddPostForm;
    let PostView = root.blog.views.Post;

    let PostModel = root.blog.models.Post;
    let PostListModel = root.blog.models.PostList;

    class AppController {
        constructor() {
            this.postListModel = new PostListModel();

            new AddPostFormView();

            PostsService.fetch((postList) => {
                postList.forEach(this.createPost, this);
            });

            runtime.on(constants.post.NEW_POST, (post) => {
                this.createPost(post);
                PostsService.save(this.postListModel.toJSON());
            });
        }

        createPost(post) {
            this.postListModel.addPostModel(new PostModel(post));
            new PostView().render(post);
        }
    }

    root.blog.controllers.AppController = AppController;
}(window));
