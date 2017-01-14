(function (root) {
    'use strict';

    let Component = root.blog.views.Component;

    class PostComponent {
        constructor(post) {
            console.debug('new PostComponent');

            let template = document.querySelector('#template-post').innerHTML;
            let compiledTemplate = Component.compile(template, post);
            let $target = document.querySelector('#js-list-of-posts');
            Component.render($target, compiledTemplate);
        }
    }

    root.blog.views.PostComponent = PostComponent;
}(window));
