class PostModel {
    static restore({ id, date, title, content }) {
        let post = new PostModel({ title, content });
        post._id = id;
        post._date = date;
        return post;
    }

    constructor({ title, content }) {
        this._id = uuid.v4();
        this._date = Date.now();
        this._title = title;
        this._content = content;
    }

    toJSON() {
        return {
            id: this._id,
            date: this._date,
            title: this._title,
            content: this._content,
        };
    }
}
