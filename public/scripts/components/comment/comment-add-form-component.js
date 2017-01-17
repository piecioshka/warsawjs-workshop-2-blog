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

            this.$form = document.querySelector('#comment-add-form');

            this.setupListeners();
        }

        setupListeners() {
            this.$form.addEventListener('submit', this.onSubmit.bind(this));
        }

        _getFormData() {
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

            let formData = this._getFormData();
            runtime.emit(constants.comment.NEW_COMMENT, formData);

            this._clearInputs();
        }

        _clearInputs() {
            this.$form.reset();
        }

        render() {
            let template = this.$template.innerHTML;
            let $target = document.querySelector('#list-of-components');
            Component.render($target, template);
        }
    }

    root.blog.views.AddCommentFormComponent = AddCommentFormComponent;
}(window));
