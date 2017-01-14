(function (root) {
    'use strict';

    let runtime = root.blog.runtime;
    let PostController = root.blog.controllers.PostController;

    function setup() {
        let controller = new PostController();
        let router = runtime.router = new Grapnel({ hashBang: true });

        router.get('/', controller.onPostListHandler.bind(controller));
        router.get('/posts/:id', controller.onPostHandler.bind(controller));
        router.get('/posts/:id/delete', controller.onPostRemoveHandler.bind(controller));

        if (!router.path()) {
            router.navigate('/');
        }

        window.app = controller;
    }

    setup();
}(window));
