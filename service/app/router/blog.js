'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/api/blog/comment/visitorLogin', controller.blog.comment.visitorLogin);
  router.post('/api/blog/comment/updatePortrait', controller.blog.comment.updatePortrait);
  router.post('/api/blog/upload', controller.blog.upload.index);
  router.post('/api/blog/comment/getComments', controller.blog.comment.getComments);
  router.post('/api/blog/comment/addComment', controller.blog.comment.addComment);
  router.post('/api/blog/comment/addLikeCount', controller.blog.comment.addLikeCount);
  router.post('/api/blog/index/getTalkList', controller.blog.index.getTalkList);
  router.post('/api/blog/index/addLikeCount', controller.blog.index.addLikeCount);
  router.get('/api/blog/index/getUserInfoById/:id', controller.blog.index.getUserInfoById);
  router.post('/api/blog/index/getArticleList', controller.blog.index.getArticleList);
  router.get('/api/blog/index/getAdverList', controller.blog.index.getAdverList);
  router.get('/api/blog/articledetail/getArticleDetailById/:id', controller.blog.articledetail.getArticleDetailById);
  router.post('/api/blog/articlelist/getArticleList', controller.blog.articlelist.getArticleList);
  router.get('/api/blog/articlelist/getArticleTypes', controller.blog.articlelist.getArticleTypes);
  router.get('/api/blog/about/getAbout', controller.blog.about.getAbout);
  router.post('/api/blog/index/getNovelList', controller.blog.index.getNovelList);
  router.get('/api/blog/novel/getChapterById/:id', controller.blog.novel.getChapterById);
  router.get('/api/blog/novel/getNovelById/:id', controller.blog.novel.getNovelById);
  router.get('/api/blog/novel/getChapterListById/:id', controller.blog.novel.getChapterListById);
  router.post('/api/blog/index/getIndexListApp', controller.blog.index.getIndexListApp);
  router.post('/api/blog/index/getSearchList', controller.blog.index.getSearchList);
};
