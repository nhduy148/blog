"use strict";
let blogCtrl = require('../controllers/blog.controller')

module.exports = app => {
  app.get('/', blogCtrl.home)

  app.get('/categories', blogCtrl.getCategories)

  app.get('/tags', blogCtrl.getHashtags)

  app.get('/posts', blogCtrl.getPosts)
}