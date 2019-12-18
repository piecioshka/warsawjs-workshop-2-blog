const posts = [];

function serializePostCollection() {
    const result = [];
    for (const post of posts) {
        const serializedPost = {};
        post.forEach((value, key) => {
            serializedPost[key] = value;
        });
        result.push(serializedPost);
    }
    return result;
}

function deserializePostCollection(serializedPosts) {
    const result = [];
    serializedPosts.forEach((post) => {
        const map = new Map();
        for (const key in post) {
            map.set(key, post[key]);
        }
        result.push(map);
    });
    return result;
}

function removePostById(postId) {
    const foundIndex = posts.findIndex((post) => {
        return post.get('id') === postId;
    });

    if (foundIndex !== -1) {
        posts.splice(foundIndex, 1);
    }
}

function main() {
    const $page = document.querySelector('#page');

    const serializedPosts = MyStorage.read('posts');
    const unserializedPosts = deserializePostCollection(serializedPosts);
    posts.push(...unserializedPosts);

    const router = new Routing($page);
}

window.addEventListener('DOMContentLoaded', main);
