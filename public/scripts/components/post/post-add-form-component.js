(function (root) {
    'use strict';

    let runtime = root.blog.runtime;
    let constants = root.blog.constants;
    let removeHTMLTags = root.blog.utils.removeHTMLTags;
    let Component = root.blog.views.Component;

    class AddPostFormComponent {
        constructor() {
            console.debug('Render component: AddPostFormComponent');

            this.$template = document.querySelector('#template-post-add-form');

            this.render();

            this.$button = document.querySelector('#js-display-form-add-post');
            this.$form = document.querySelector('#js-post-add-form');

            this.setupListeners();
        }

        setupListeners() {
            this.$button.addEventListener('click', this.toggleDisplayForm.bind(this));
            this.$form.addEventListener('submit', this.onSubmit.bind(this));
        }

        toggleDisplayForm() {
            this.$form.classList.toggle('hide');
        }

        getFormData() {
            let formData = new FormData(this.$form);
            let results = {};
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
            let $title = this.$form.querySelector('#js-post-title');
            let $body = this.$form.querySelector('#js-post-body');
            $title.value = $body.value = '';
        }

        render() {
            let template = this.$template.innerHTML;
            let $target = document.querySelector('#js-list-of-components');
            Component.render($target, template);
        }
    }

    root.blog.views.AddPostFormComponent = AddPostFormComponent;
}(window));
