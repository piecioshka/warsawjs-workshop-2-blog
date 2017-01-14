(function (root) {
    'use strict';

    let Component = root.blog.views.Component;

    class CommentComponent {
        constructor(comment) {
            console.debug('Render component: CommentComponent, id: %s', comment.id);
            this.render(comment);
        }

        render(comment) {
            let template = document.querySelector('#template-comment').innerHTML;
            let compiledTemplate = Component.compile(template, comment);
            let $target = document.querySelector('#list-of-components');
            Component.render($target, compiledTemplate);
        }
    }

    root.blog.views.CommentComponent = CommentComponent;
}(window));
