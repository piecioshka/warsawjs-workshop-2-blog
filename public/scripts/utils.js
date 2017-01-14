(function (root) {
    'use strict';

    function assert(cond, msg) {
        if (!cond) throw new Error(msg || 'AssertionError');
    }

    function removeHTMLTags(htmlString) {
        let $fake = document.createElement('fake');
        $fake.innerHTML = htmlString;
        return $fake.textContent;
    }

    root.blog.utils = {
        assert: assert,
        removeHTMLTags: removeHTMLTags
    };
}(window));
