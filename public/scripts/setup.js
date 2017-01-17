(function (root) {
    'use strict';

    let PostController = root.blog.controllers.PostController;
    let router = root.blog.runtime.router;

    function setup() {
        let controller = new PostController();
        router.setup(controller);

        // Only for development process.
        window.app = controller;
    }

    setup();
}(window));
