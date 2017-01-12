(function (root) {
    'use strict';

    let runtime = root.blog.runtime;
    let constants = root.blog.constants;

    class AddPostFormView {
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

        onSubmit(evt) {
            evt.preventDefault();

            let title = this.$title.value;
            let body = this.$body.value;

            runtime.emit(constants.post.NEW_POST, { title, body });

            this.toggleDisplayForm();
            this.clearInputs();
        }

        clearInputs() {
            this.$title.value = this.$body.value = '';
        }
    }

    root.blog.views.AddPostForm = AddPostFormView;
}(window));
