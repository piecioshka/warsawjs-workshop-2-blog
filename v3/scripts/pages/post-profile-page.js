class PostProfilePage {

    display($target) {
        const $page = document.createElement('div');
        $page.id = 'post-profile-page';
        $target.append($page);

        const postId = location.hash.substring(8);
        const post = posts.find((item) => {
            return item.get('id') === postId;
        });

        if (!post) {
            console.warn('nie ma takiego posta');
            return;
        }

        const p = new PostComponent(post);
        p.display($page);
    }

}
