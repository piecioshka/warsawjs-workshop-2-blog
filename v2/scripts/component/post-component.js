function toElement(string) {
    let domParser = new DOMParser();
    let document = domParser.parseFromString(string, 'text/html');
    let $fragment = document.createDocumentFragment();
    Array.from(document.body.children).forEach(function ($element) {
        $fragment.appendChild($element);
    });
    return $fragment;
}

class PostComponent {
    static compile(data) {
        const TEMPLATE = document.querySelector('.template-post').innerHTML;
        return Mustache.render(TEMPLATE, data);
    }

    constructor(postModel) {
        this._postModel = postModel;
        this.render();
    }

    render() {
        let $postList = document.querySelector('main');
        let postModel = this._postModel.toJSON();
        postModel.date = new Date(postModel.date).toISOString();
        let postTemplate = PostComponent.compile(postModel);
        let $post = toElement(postTemplate);
        $postList.appendChild($post);
    }
}
