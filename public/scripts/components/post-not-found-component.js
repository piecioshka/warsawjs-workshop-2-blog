(function (root) {
    'use strict';

    let Component = root.blog.views.Component;

    class PostNotFoundComponent {
        constructor(postId) {
            console.debug('Render component: PostNotFoundComponent');

            let template = document.querySelector('#template-post-not-found').innerHTML;
            let compiledTemplate = Component.compile(template, { id: postId });
            let $target = document.querySelector('#js-list-of-posts');
            Component.render($target, compiledTemplate);
        }
    }

    root.blog.views.PostNotFoundComponent = PostNotFoundComponent;
}(window));
