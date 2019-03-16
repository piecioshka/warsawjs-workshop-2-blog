class Router {
    constructor() {
        let router = page.create({ window });
        router.base(location.pathname);

        function clearRouterOutlet() {
            let $postList = document.querySelector('main');
            $postList.innerHTML = '';
        }

        router('*', function (context, next) {
            console.log('[routing] path = "%s"', context.path);
            clearRouterOutlet();
            next();
        });

        router('/post/:id', function (req) {
            let id = req.params.id;
            let postModel = postListModel.getById(id);

            if (!postModel) {
                console.warn('Post (id = "%s") is not exist', id);
                return;
            }

            new PostComponent(postModel);
        });

        router('/post/:id/delete', function (req) {
            let id = req.params.id;
            postListModel.deleteById(id);
            postListModel.save();
            router.redirect('/');
        });

        router('/post/:id/edit', function (req) {
            let id = req.params.id;
            let postModel = postListModel.getById(id);

            if (!postModel) {
                console.warn('Post (id = "%s") is not exist', id);
                return;
            }

            let form = new PostEditForm(postModel);
            form.on('edit-post', function () {
                router.redirect('/');
            });
        });

        router('/', function () {
            let form = new PostAddForm();

            form.on('new-post', function (postModel) {
                new PostComponent(postModel);
            });

            postListModel.forEach(function (postModel) {
                new PostComponent(postModel);
            });
        });

        router({
            hashbang: true,
        });
    }
}
