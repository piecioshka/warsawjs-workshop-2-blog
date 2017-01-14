(function (root) {
    'use strict';

    let runtime = root.blog.runtime;
    let constants = root.blog.constants;
    let removeHTMLTags = root.blog.utils.removeHTMLTags;

    class AddPostFormComponent {
        constructor() {
            console.debug('Render component: AddPostFormComponent');

            this.$button = document.querySelector('#js-display-form-add-post');
            this.$form = document.querySelector('#js-post-add-form');

            this.$title = this.$form.querySelector('#js-post-title');
            this.$body = this.$form.querySelector('#js-post-body');

            this.$button.addEventListener('click', this.toggleDisplayForm.bind(this));
            this.$form.addEventListener('submit', this.onSubmit.bind(this));
        }

        toggleDisplayForm() {
            this.$form.classList.toggle('hide');
        }

        getFormData() {
            let results = {};
            let formData = new FormData(this.$form.querySelector('form'));
            formData.forEach((value, key) => {
                value = removeHTMLTags(value);
                key = removeHTMLTags(key);
                results[key] = value;
            });

            return results;
        }

        onSubmit(evt) {
            evt.preventDefault();

            let formData = this.getFormData();

            runtime.emit(constants.post.NEW_POST, formData);

            this.toggleDisplayForm();
            this.clearInputs();
        }

        clearInputs() {
            this.$title.value = this.$body.value = '';
        }
    }

    root.blog.views.AddPostFormComponent = AddPostFormComponent;
}(window));
