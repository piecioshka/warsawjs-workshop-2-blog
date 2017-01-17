(function (root) {
    'use strict';

    let Router = {
        setup(controller) {
            this._controller = controller;
            this._router = new Grapnel({ hashBang: true });

            this._setupRoutes();
            this._setDefaultPath();
        },

        _setupRoutes() {
            let router = this._router;
            let controller = this._controller;

            router.get('/', controller.onPostListHandler.bind(controller));
            router.get('/posts/:id', controller.onPostHandler.bind(controller));
            router.get('/posts/:id/delete', controller.onPostRemoveHandler.bind(controller));
            router.get('/posts/:postId/comment/:commentId/delete', controller.onCommentRemoveHandler.bind(controller));
        },

        _setDefaultPath() {
            if (!this._router.path()) {
                this._router.navigate('/');
            }
        },

        navigate(...args) {
            return this._router.navigate(...args);
        }
    };

    root.blog.runtime.router = Router;
}(window));
