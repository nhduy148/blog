const express = require('express');
const app = express();

require('dotenv').config()
const port = process.env.PORT || 5000

var bodyParser = require('body-parser');

app.use(express.json());

app.use(bodyParser.text());

app.use(bodyParser.raw());

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));

let routes = require('./routes/blog.route');
routes(app);

app.use( (req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader("Content-Type", "text/plain");
	res.setHeader("Content-Type", "application/json");

  res.status(400).send({ error: 'URL: '+req.originalUrl+' not found!'});
  next();
})

app.listen(port, () => console.log(`Server started on port ${port}`));