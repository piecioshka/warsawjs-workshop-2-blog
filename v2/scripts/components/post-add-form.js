class PostAddForm {
    static compile(data) {
        const TEMPLATE = document.querySelector('.template-add-post-form').innerHTML;
        return Mustache.render(TEMPLATE, data);
    }

    constructor() {
        this.render();
        this.$element = document.querySelector('form');
        this.$element.addEventListener('submit', this._onSubmit.bind(this));
        EventEmitter.mixin(this);
    }

    _onSubmit(evt) {
        evt.preventDefault();

        let formData = new FormData(this.$element);
        let formObject = castIterator(formData);

        let postModel = new PostModel({
            title: formObject['post-title'],
            content: formObject['post-content']
        });
        postListModel.add(postModel);
        this.emit('new-post', postModel);
        postListModel.save();

        this.$element.reset();
    }

    render() {
        let $postList = document.querySelector('main');
        let postTemplate = PostAddForm.compile();
        let $post = toElement(postTemplate);
        $postList.appendChild($post);
    }
}
