(function (root) {
    'use strict';

    let Component = root.blog.views.Component;

    class CommentComponent {
        constructor(commentModel) {
            console.debug(
                'Render component: CommentComponent, id: %s',
                commentModel.id
            );
            this.render(commentModel);
        }

        render(commentModel) {
            let template = document.querySelector('#template-comment').innerHTML;
            let compiledTemplate = Component.compile(
                template,
                commentModel.toJSON()
            );
            let $target = document.querySelector('#list-of-components');
            Component.render($target, compiledTemplate);
        }
    }

    root.blog.views.CommentComponent = CommentComponent;
}(window));
