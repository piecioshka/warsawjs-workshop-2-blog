(function (root) {
    'use strict';

    let PostsService = root.blog.services.PostsService;
    let AddPostForm = root.blog.views.AddPostForm;
    let PostList = root.blog.models.PostList;

    class AppController {
        constructor() {
            new AddPostForm();

            PostsService.fetch((postList) => {
                new PostList(postList);
            });
        }
    }

    root.blog.controllers.AppController = AppController;
}(window));
