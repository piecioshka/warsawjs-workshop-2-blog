(function (root) {
    'use strict';

    let Component = root.blog.views.Component;

    class PostComponent {
        constructor(post) {
            console.debug('Render component: PostComponent, id: %s', post.id);

            let template = document.querySelector('#template-post').innerHTML;
            let compiledTemplate = Component.compile(template, post);
            let $target = document.querySelector('#js-list-of-posts');
            Component.render($target, compiledTemplate);
        }
    }

    root.blog.views.PostComponent = PostComponent;
}(window));
