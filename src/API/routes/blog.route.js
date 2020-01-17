const blogCtrl = require('../controllers/blog.controller')

module.exports = app => {
  app.get('/', blogCtrl.home)

  app.get('/categories', blogCtrl.getCategories)

  app.get('/tags', blogCtrl.getHashtags)

  app.get('/posts', blogCtrl.getPosts)

  app.get('/videos', blogCtrl.getVideos)

  app.get('/post/:post', blogCtrl.getPostDetails)

  app.get('/comment/:post', blogCtrl.getComments)

  app.get('/category/:category', blogCtrl.getPostsByCategory)

  app.post('/comment', blogCtrl.postComment)

  app.get('/test', blogCtrl.test);

  app.get('/v2/posts', blogCtrl.getPostsV2)

  app.get('/v2/comments/:post', blogCtrl.getCommentsV2)
}