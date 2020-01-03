"use strict";
let blogCtrl = require('../controllers/blog.controller')

module.exports = app => {
  app.get('/', blogCtrl.home)

  app.get('/categories', blogCtrl.getCategories)

  app.get('/tags', blogCtrl.getHashtags)

  app.get('/posts', blogCtrl.getPosts)

  app.get('/videos', blogCtrl.getVideos)

  app.get('/post/:post', blogCtrl.getPostDetails)

  app.get('/comment/:post', blogCtrl.getCommentByPostID)

  app.get('/category/:category', blogCtrl.getPostsByCategory)

  app.post('/comment/:postID', blogCtrl.postComment)

  app.get('/test', blogCtrl.test);
}