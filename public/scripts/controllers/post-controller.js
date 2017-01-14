(function (root) {
    'use strict';

    let runtime = root.blog.runtime;
    let constants = root.blog.constants;
    let assert = root.blog.utils.assert;

    let StorageService = root.blog.services.StorageService;
    let LocalStorageAdapter = root.blog.adapters.LocalStorageAdapter;
    let RestAdapter = root.blog.adapters.RestAdapter;

    let AddPostFormComponent = root.blog.views.AddPostFormComponent;
    let PostComponent = root.blog.views.PostComponent;
    let PostNotFoundComponent = root.blog.views.PostNotFoundComponent;

    let AddCommentFormComponent = root.blog.views.AddCommentFormComponent;
    let CommentComponent = root.blog.views.CommentComponent;

    let PostModel = root.blog.models.PostModel;
    let PostListModel = root.blog.models.PostListModel;

    let CommentModel = root.blog.models.CommentModel;
    let CommentListModel = root.blog.models.CommentListModel;

    const STORAGE_KEY = 'posts';

    class PostController {
        constructor() {
            runtime.PostsService = new StorageService(STORAGE_KEY);
            runtime.PostsService.setAdapter(LocalStorageAdapter);

            this.postListModel = new PostListModel();

            runtime.on(constants.post.NEW_POST, (formData) => {
                let post = {
                    title: formData['post-title'],
                    body: formData['post-body'],
                };

                this._clearPostContainer();

                this._appendPostModel(post);
                this._renderPostList();
                this._savePosts();

                runtime.router.navigate('/');
            });

            runtime.on(constants.comment.NEW_COMMENT, (formData) => {
                let comment = {
                    body: formData['comment-body'],
                    postId: formData['post-id'],
                };

                this._clearPostContainer();

                this._appendCommentModel(comment, comment.postId);
                this._renderPostProfile(comment.postId);
                this._savePosts();
            });
        }

        _savePosts() {
            runtime.PostsService.save(this.postListModel.toJSON());
        }

        _loadPosts(callback = Function) {
            this.postListModel.clear();
            runtime.PostsService.fetch((error, postList) => {
                postList.forEach(this._appendPostModel, this);
                callback();
            });
        }

        onPostListHandler() {
            console.log('[+] Display list of posts');

            this._clearPostContainer();

            new AddPostFormComponent();

            this._loadPosts(() => {
                this._renderPostList();
            });
        }

        onPostHandler(context) {
            let postId = context.params.id;
            console.log('[+] Display post: %s', postId);

            this._clearPostContainer();

            new AddPostFormComponent();

            this._loadPosts(() => {
                this._renderPostProfile(postId);
            });
        }

        onPostRemoveHandler(context, callstack) {
            let postId = context.params.id;
            console.log('%c[+] Remove post: %s', 'color: red', postId);

            let msg = `Czy na pewno chcesz usunąć post: ${postId}?`;

            if (!confirm(msg)) {
                runtime.router.navigate(callstack.previousState.value);
                return;
            }

            this._clearPostContainer();

            new AddPostFormComponent();

            this.postListModel.removeEntry(postId);
            this._savePosts();

            this._renderPostProfile(postId);

            runtime.router.navigate('/');
        }

        onCommentRemoveHandler(context, callstack) {
            let commentId = context.params.commentId;
            let postId = context.params.postId;

            let msg = `Czy na pewno chcesz usunąć komentarz: ${commentId}?`;

            if (!confirm(msg)) {
                runtime.router.navigate(callstack.previousState.value);
                return;
            }

            assert(typeof commentId === 'string');
            assert(typeof postId === 'string');

            console.log('%c[+] Remove comment: %s in post %s', 'color: red', commentId, postId);

            this.postListModel.getEntry(postId).comments.removeEntry(commentId);
            this._savePosts();

            runtime.router.navigate(`/posts/${postId}`);
        }

        _clearPostContainer() {
            document.querySelector('#js-list-of-components').innerText = '';
        }

        _renderPostProfile(postId) {
            assert(typeof postId === 'string');

            let postModel = this.postListModel.getEntry(postId);

            if (postModel) {
                this._renderPost(postModel);
                new AddCommentFormComponent(postModel);
                this._renderCommentList(postId);
            } else {
                new PostNotFoundComponent(postId);
            }
        }

        _appendPostModel(post) {
            this.postListModel.addEntry(new PostModel(post));
        }

        _renderPostList() {
            console.group('Render list of posts');
            this.postListModel.each(this._renderPost);
            console.groupEnd('Render list of posts');
        }

        _renderPost(postModel) {
            new PostComponent(postModel.toJSON());
        }

        _appendCommentModel(comment, postId) {
            this.postListModel.getEntry(postId).comments.addEntry(new CommentModel(comment));
        }

        _renderCommentList(postId) {
            console.group('Render list of comments');
            this.postListModel.getEntry(postId).comments.each(this._renderComment);
            console.groupEnd('Render list of comments');
        }

        _renderComment(commentModel) {
            new CommentComponent(commentModel.toJSON());
        }
    }

    root.blog.controllers.PostController = PostController;
}(window));
