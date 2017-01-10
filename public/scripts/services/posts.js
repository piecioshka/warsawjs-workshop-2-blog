(function (root) {
    'use strict';

    let makeRequest = root.blog.utils.makeRequest;

    const POST_KEY = 'posts';
    const POST_LIST_URL = 'https://jsonplaceholder.typicode.com/posts';
    const LIMIT_OF_POST_LIST = 1;

    function fetchJSONHolders(callback) {
        makeRequest(POST_LIST_URL, (posts) => {
            posts = JSON.parse(posts);

            // Reduce size of list.
            posts.splice(LIMIT_OF_POST_LIST);

            callback(posts);
        });
    }

    function fetchLocalStorage(callback) {
        let posts = root.localStorage.getItem(POST_KEY);

        try {
            posts = JSON.parse(posts);
        } catch (e) {
            console.error(e);
        }

        posts = posts || [];
        callback(posts);
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
