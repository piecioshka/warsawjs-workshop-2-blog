(function (root) {
    'use strict';

    let runtime = root.blog.runtime;
    let constants = root.blog.constants;
    let removeHTMLTags = root.blog.utils.removeHTMLTags;
    let Component = root.blog.views.Component;

    class AddCommentFormComponent {
        constructor(post) {
            console.debug('Render component: AddCommentFormComponent');

            this.post = post;
            this.$template = document.querySelector('#template-comment-add-form');

            this.render();

            this.$form = document.querySelector('#js-comment-add-form');

            this.setupListeners();
        }

        setupListeners() {
            this.$form.addEventListener('submit', this.onSubmit.bind(this));
        }

        getFormData() {
            let formData = new FormData(this.$form);
            let results = {};
            formData.forEach((value, key) => {
                value = removeHTMLTags(value);
                key = removeHTMLTags(key);
                results[key] = value;
            });
            results['post-id'] = this.post.id;
            return results;
        }

        onSubmit(evt) {
            evt.preventDefault();

            let formData = this.getFormData();

            runtime.emit(constants.comment.NEW_COMMENT, formData);

            this.clearInputs();
        }

        clearInputs() {
            let $body = this.$form.querySelector('#js-comment-body');
            $body.value = '';
        }

        render() {
            let template = this.$template.innerHTML;
            let $target = document.querySelector('#js-list-of-components');
            Component.render($target, template);
        }
    }

    root.blog.views.AddCommentFormComponent = AddCommentFormComponent;
}(window));
