"use strict";
let xxx = require('../controllers/xxx.controller')

module.exports = app => {
  app.get('/', xxx.home)
}