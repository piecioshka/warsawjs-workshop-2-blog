class PostComponent {

    constructor(post) {
        this.post = post;
    }

    createTitle($target) {
        const $title = document.createElement('h2');
        $title.textContent = this.post.get('title');
        $target.append($title);
    }

    createBody($target) {
        const $body = document.createElement('p');
        $body.textContent = this.post.get('body');
        $target.append($body);
    }

    createDate($target) {
        const $date = document.createElement('small');
        $date.textContent = this.post.get('createdTime');
        $target.append($date);
    }

    display($target) {
        const $post = document.createElement('article');
        $post.classList.add('post');
        this.createTitle($post);
        this.createDate($post);
        this.createBody($post);
        $target.append($post);
    }

}