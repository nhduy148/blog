"use strict";
let blogCtrl = require('../controllers/blog.controller')

module.exports = app => {
  app.get('/', blogCtrl.home)

  app.get('/categories', blogCtrl.getCategories)

  app.get('/posts', blogCtrl.getPosts)
}