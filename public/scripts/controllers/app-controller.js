(function (root) {
    'use strict';

    let runtime = root.blog.runtime;
    let constants = root.blog.constants;

    let StorageService = root.blog.services.StorageService;
    let LocalStorageAdapter = root.blog.adapters.LocalStorageAdapter;
    let RestAdapter = root.blog.adapters.RestAdapter;

    let AddPostFormComponent = root.blog.views.AddPostForm;
    let PostComponent = root.blog.views.Post;

    let PostModel = root.blog.models.Post;
    let PostListModel = root.blog.models.PostList;

    const STORAGE_KEY = 'posts';

    class AppController {
        constructor() {
            runtime.PostsService = new StorageService(STORAGE_KEY);
            runtime.PostsService.setAdapter(LocalStorageAdapter);

            this.postListModel = new PostListModel();

            new AddPostFormComponent();

            runtime.PostsService.fetch((error, postList) => {
                postList.forEach(this.createPost, this);
            });

            runtime.on(constants.post.NEW_POST, (post) => {
                this.createPost(post);
                runtime.PostsService.save(this.postListModel.toJSON());
            });
        }

        createPost(post) {
            this.postListModel.addPostModel(new PostModel(post));
            new PostComponent().render(post);
        }
    }

    root.blog.controllers.AppController = AppController;
}(window));
