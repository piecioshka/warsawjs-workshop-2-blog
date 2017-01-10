(function (root) {
    'use strict';

    let assert = root.blog.utils.assert;

    class Post {
        constructor(data) {
            assert(typeof data.title === 'string');
            assert(typeof data.body === 'string');
            assert(typeof data.id === 'number');

            this.data = data;
            this.$template = document.querySelector('#template-post').innerHTML;
            this.$dest = document.querySelector('#js-list-of-posts');
        }

        compile() {
            return root.Mustache.render(this.$template, this.data);
        }

        render() {
            let compiled = this.compile();
            let $fake = document.createElement('fake');
            $fake.innerHTML = compiled;
            let $article = $fake.firstElementChild;
            this.$dest.insertBefore($article, this.$dest.firstElementChild);
        }
    }

    root.blog.models.Post = Post;
}(window));
