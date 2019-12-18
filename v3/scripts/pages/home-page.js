class HomePage {

    removePostList($target) {
        const $postCollection = $target.querySelectorAll('.post');
        $postCollection.forEach(function ($item) {
            $item.remove();
        });
    }

    displayPostList($target) {
        for (const post of posts) {
            const p = new PostComponent(post);
            p.display($target);
        }
    }

    display($target) {
        const $page = document.createElement('div');
        $page.id = "home-page";
        $target.append($page);

        const postForm = new FormComponent();
        const $postForm = postForm.display($page);
        // const self = this;

        this.removePostList($page);
        this.displayPostList($page);

        $postForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const data = new FormData($postForm);
            const post = new Map(data);

            post.set('createdTime', new Date().toLocaleString('pl'));
            post.set('id', (Math.random() * 100000).toFixed(0));

            posts.push(post);
            const serializedPosts = serializePostCollection();
            MyStorage.save('posts', serializedPosts);

            $postForm.reset();
            this.removePostList($page);
            this.displayPostList($page);
        });
    }

}
