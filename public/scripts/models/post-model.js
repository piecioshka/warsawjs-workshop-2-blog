(function (root) {
    'use strict';

    let assert = root.blog.utils.assert;
    let randomInteger = root.blog.utils.randomInteger;

    class PostModel {
        constructor(data) {
            assert(typeof data.title === 'string');
            assert(typeof data.body === 'string');

            this.id = data.id || randomInteger();
            this.title = data.title;
            this.body = data.body;
        }

        toJSON() {
            return {
                id: this.id,
                title: this.title,
                body: this.body
            }
        }
    }

    root.blog.models.Post = PostModel;
}(window));
