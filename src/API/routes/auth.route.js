const authCtrl = require('../controllers/auth.controller')

module.exports = app => {

  app.post('/login', authCtrl.login)

  app.post('/register', authCtrl.register)

  app.get('/auth', authCtrl.auth)

  app.post('/test', authCtrl.test)
}