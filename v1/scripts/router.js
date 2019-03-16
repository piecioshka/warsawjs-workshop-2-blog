(function (root) {
    'use strict';

    let Router = {
        setup(controller) {
            console.log('Router#setup');
            this._router = page.create({ window });
            this._router.base(location.pathname);
            this._controller = controller;

            this._setupRoutes();
        },

        _setupRoutes() {
            console.log('Router#_setupRoutes');
            let ctrl = this._controller;

            const routes = {
                '/': ctrl.onPostListHandler.bind(ctrl),
                '/posts/:id': ctrl.onPostHandler.bind(ctrl),
                '/posts/:id/delete': ctrl.onPostRemoveHandler.bind(ctrl),
                '/posts/:postId/comment/:commentId/delete': ctrl.onCommentRemoveHandler.bind(ctrl),
                "*": (req, route) => {
                    if (!route.parent()) {
                        console.log({ req, route });
                    }
                }
            };

            Object.keys(routes).forEach((route) => {
                const handler = routes[route];
                this._router(route, handler);
            });

            this._router({
                hashbang: true,
            });
        },

        navigate(url) {
            return this._router.redirect(url);
        }
    };

    root.blog.runtime.router = Router;
}(window));
