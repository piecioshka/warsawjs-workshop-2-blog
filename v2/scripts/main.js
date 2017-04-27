let postListModel = new PostListModel();
postListModel.load();

function castIterator(iterator) {
    let object = {};
    for (let item of iterator) {
        object[item[0]] = item[1];
    }
    return object;
}

function setup() {
    new Router();
}

window.addEventListener('DOMContentLoaded', setup);
