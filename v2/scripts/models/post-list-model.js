const POST_STORAGE_KEY = 'blog';

function deserialize(string) {
    try {
        return JSON.parse(string);
    } catch (err) {
        console.error(err);
        return null;
    }
}

class PostListModel {
    constructor() {
        this._posts = [];
    }

    add(post) {
        this._posts.push(post);
    }

    save() {
        let postList = this._posts.map(function (postModel) {
            return postModel.toJSON();
        });
        localStorage.setItem(POST_STORAGE_KEY, JSON.stringify(postList));
    }

    load() {
        let serialized = localStorage.getItem(POST_STORAGE_KEY);
        let postList = deserialize(serialized);

        if (!postList) {
            console.error('Cannot load posts');
            return;
        }

        postList.forEach(function (post) {
            this._posts.push(PostModel.restore(post));
        }, this);
    }

    forEach(...args) {
        this._posts.forEach(...args);
    }

    getById(id) {
        return this._posts.find(function (postModel) {
            return postModel._id === id;
        });
    }

    deleteById(id) {
        this._posts = this._posts.filter(function (postModel) {
            return postModel._id !== id;
        });
    }
}
