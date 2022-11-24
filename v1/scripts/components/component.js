(function (root) {
    'use strict';

    function toHTMLElement(compiled) {
        let parser = new DOMParser();
        let $document = parser.parseFromString(compiled, 'text/html');
        return $document.body.firstElementChild;
    }

    let Component = {
        compile(raw, data) {
            return root.Mustache.render(raw, data);
        },

        render($target, compiledTemplate) {
            let $article = toHTMLElement(compiledTemplate);
            $target.appendChild($article);
        }
    };

    root.blog.views.Component = Component;
}(window));
