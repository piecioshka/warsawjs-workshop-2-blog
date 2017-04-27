(function (root) {
    'use strict';

    let Component = root.blog.views.Component;

    class PostComponent {
        constructor(postModel) {
            console.debug(
                'Render component: PostComponent, id: %s',
                postModel.id
            );
            this.render(postModel);
        }

        render(postModel) {
            let template = document.querySelector('#template-post').innerHTML;
            let compiledTemplate = Component.compile(
                template,
                postModel.toJSON()
            );
            let $target = document.querySelector('#list-of-components');
            Component.render($target, compiledTemplate);
        }
    }

    root.blog.views.PostComponent = PostComponent;
}(window));
