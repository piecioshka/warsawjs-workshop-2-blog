class PostEditForm {
    static compile(data) {
        const TEMPLATE = document.querySelector('.template-edit-post-form').innerHTML;
        return Mustache.render(TEMPLATE, data);
    }

    constructor(postModel) {
        this._postModel = postModel;
        this.render();
        this.$element = document.querySelector('form');
        this.$element.addEventListener('submit', this._onSubmit.bind(this));
        EventEmitter.mixin(this);
    }

    _onSubmit(evt) {
        evt.preventDefault();

        let formData = new FormData(this.$element);
        let formObject = castIterator(formData);

        this._postModel._title = formObject['post-title'];
        this._postModel._content = formObject['post-content'];

        postListModel.save();
        this.trigger('edit-post');
    }

    render() {
        let $postList = document.querySelector('main');
        let postTemplate = PostEditForm.compile(this._postModel.toJSON());
        let $post = toElement(postTemplate);
        $postList.appendChild($post);
    }
}
