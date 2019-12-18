const posts = [];

function removePostList($target) {
    const $postCollection = $target.querySelectorAll('.post');
    $postCollection.forEach(function ($item) {
        $item.remove();
    });
}

function displayPostList($target) {
    for (const post of posts) {
        const p = new PostComponent(post);
        p.display($target);
    }
}

function main() {
    const $page = document.querySelector('#page');
    const postForm = new FormComponent();
    const $postForm = postForm.display($page);

    $postForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        const data = new FormData($postForm);
        const post = new Map(data);
        post.set('createdTime', new Date().toLocaleString('pl'));
        posts.push(post);

        removePostList($page);
        displayPostList($page);
    });
}

window.addEventListener('DOMContentLoaded', main);
