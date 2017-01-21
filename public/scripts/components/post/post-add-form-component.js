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

            this.$button = document.querySelector('#display-form-add-post');
            this.$form = document.querySelector('#post-add-form');

            this.setupListeners();
        }

        setupListeners() {
            this.$button.addEventListener(
                'click',
                this._toggleDisplayForm.bind(this)
            );
            this.$form.addEventListener('submit', this.onSubmit.bind(this));
        }

        _toggleDisplayForm() {
            this.$form.classList.toggle('hide');
        }

        _getFormData() {
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

            let formData = this._getFormData();
            runtime.emit(constants.post.NEW_POST, formData);

            this._clearInputs();
            this._toggleDisplayForm();
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

    root.blog.views.AddPostFormComponent = AddPostFormComponent;
}(window));
