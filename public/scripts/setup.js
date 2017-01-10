(function (root) {
    'use strict';

    let PostsService = root.blog.services.PostsService;
    let AddPostForm = root.blog.views.AddPostForm;
    let PostList = root.blog.models.PostList;

    function setup() {
        new AddPostForm();

        PostsService.fetch((postList) => {
            new PostList(postList);
        });
    }

    setup();
}(window));
