const posts = [];

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

    const router = new Routing($page);
}

window.addEventListener('DOMContentLoaded', main);
