'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.get('/home', controller.home.home);
  router.get('/update', controller.home.update);
  router.get('/delete', controller.home.delete);
  router.get('/news', controller.news.index);
  router.get('/newsContent', controller.news.content);
  router.get('/baiduimg',controller.img.index);
  router.get('/book',controller.book.index);
  router.get('/bookDetail',controller.book.bookDetail);
  router.get('/bookDetail1',controller.book.bookDetail1);
  router.get('/booklist',controller.book.booklist);



  router.get('/admin',controller.admin.bloglist);
  router.get('/admin/categorylist',controller.admin.categorylist);
  router.post('/admin/categoryadd',controller.admin.categoryadd);
  router.get('/adminmanager',controller.admin.adminmanager);
  router.post('/admin/delete',controller.admin.delete);
  router.post('/admin/stop',controller.admin.stop);


  router.get('/',controller.blog.blog.blog_list);
  router.get('/blog',controller.blog.user.index);
  router.get('/blog/collection',controller.blog.blog.collection);
  router.get('/blog/cancelcollection',controller.blog.blog.cancelcollection);
  router.get('/blog/blog_collectionlist',controller.blog.blog.blog_collectionlist);
  router.get('/blog/login_view',controller.blog.user.login_view);
  router.get('/blog/blog_view',controller.blog.blog.blog_view);
  router.get('/blog/list',controller.blog.blog.blog_list);
  router.get('/blog/detail',controller.blog.blog.detail);
  router.get('/blog/readnum',controller.blog.blog.readnum);
  router.post('/blog/register',controller.blog.user.register);
  router.post('/blog/login',controller.blog.user.login);
  router.get('/blog/logout',controller.blog.user.logout);
  router.post('/blog/add',controller.blog.blog.add);
  router.post('/blog/update',controller.blog.blog.update);
  router.get('/blog/find',controller.blog.blog.find);
  router.post('/blog/delete',controller.blog.blog.delete);
  router.post('/blog/comment',controller.blog.blog.comment);
};
