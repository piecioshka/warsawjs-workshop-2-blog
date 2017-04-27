class Router {
    constructor() {
        let router = new Grapnel({ hashBang: true });

        router.get('*', function (req, evt) {
            console.log('[routing] path = "%s"', evt.value);
            let $postList = document.querySelector('main');
            $postList.innerHTML = '';
        });

        router.get('/post/:id', function (req) {
            let id = req.params.id;
            let postModel = postListModel.findById(id);

            if (!postModel) {
                console.warn('Post (id = "%s") is not exist', id);
                return;
            }

            new PostComponent(postModel);
        });

        router.get('/post/:id/delete', function (req) {
            let id = req.params.id;
            postListModel.deleteById(id);
            postListModel.save();
            router.navigate('/posts');
        });

        router.get('/posts', function () {
            new PostAddForm();

            postListModel.forEach(function (postModel) {
                new PostComponent(postModel);
            });
        });

        router.get('/', function () {
            router.navigate('/posts');
        });

        if (!router.state.value) {
            router.navigate('/posts');
        }
    }
}
