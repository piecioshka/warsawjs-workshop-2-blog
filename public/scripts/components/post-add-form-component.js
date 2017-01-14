(function (root) {
    'use strict';

    let runtime = root.blog.runtime;
    let constants = root.blog.constants;
    let removeHTMLTags = root.blog.utils.removeHTMLTags;

    class AddPostFormComponent {
        constructor() {
            this.$button = document.querySelector('#js-display-form-add-post');
            this.$addPostForm = document.querySelector('#js-post-add-form');

            this.$title = this.$addPostForm.querySelector('#js-post-title');
            this.$body = this.$addPostForm.querySelector('#js-post-body');

            this.$button.addEventListener('click', this.toggleDisplayForm.bind(this));
            this.$addPostForm.addEventListener('submit', this.onSubmit.bind(this));
        }

        toggleDisplayForm() {
            this.$addPostForm.classList.toggle('hide');
        }

        getFormData() {
            let title = removeHTMLTags(this.$title.value);
            let body = removeHTMLTags(this.$body.value);

            return { title, body };
        }

        onSubmit(evt) {
            evt.preventDefault();

            runtime.emit(constants.post.NEW_POST, this.getFormData());

            this.toggleDisplayForm();
            this.clearInputs();
        }

        clearInputs() {
            this.$title.value = this.$body.value = '';
        }
    }

    root.blog.views.AddPostForm = AddPostFormComponent;
}(window));
