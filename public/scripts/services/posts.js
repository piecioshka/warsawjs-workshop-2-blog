(function (root) {
    'use strict';

    // Jeśli będziemy wykorzystać REST API to ta funkcja się przyda.
    let makeRequest = root.blog.utils.makeRequest;

    const POST_KEY = 'posts';

    function fetchLocalStorage(callback) {
        let posts = root.localStorage.getItem(POST_KEY);

        try {
            posts = JSON.parse(posts);
        } catch (e) {
            console.error(e);
        }

        callback(posts || []);
    }

    function saveLocalStorage(data) {
        root.localStorage.setItem(POST_KEY, JSON.stringify(data));
    }

    class PostsService {
        static fetch(callback) {
            fetchLocalStorage(callback);
        }

        static save(data, callback) {
            saveLocalStorage(data, callback);
        }
    }

    root.blog.services.PostsService = PostsService;
}(window));
