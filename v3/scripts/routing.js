class Routing {

    table = [
        { path: '/posts/', page: this._setupPost },
        { path: '/', page: this._setupHome },
    ];

    constructor($target) {
        window.addEventListener('hashchange', () => {
            const hash = location.hash.substring(1);

            const record = this.table.find((item) => {
                return hash.startsWith(item.path);
            });

            if (!record) {
                console.warn('nie ma takiej strony');
                return;
            }

            $target.innerHTML = '';
            record.page($target);
        });

        this._setupHome($target);
    }

    _setupHome($target) {
        const home = new HomePage();
        home.display($target);
    }

    _setupPost($target) {
        const page = new PostProfilePage();
        page.display($target);
    }

}
