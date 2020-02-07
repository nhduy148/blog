const express = require('express');
const app = express();
const cors = require("cors")

require('dotenv').config()
const port = process.env.PORT || 5000

var bodyParser = require('body-parser');

app.use(express.json());

// app.use(bodyParser.text());

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.raw());

app.use(bodyParser.json());

app.use(cors({
	origin: 'http://localhost:5002',
	credentials: true
}))

let blogRoutes = require('./routes/blog.route');
let authRoutes = require('./routes/auth.route');

blogRoutes(app);
authRoutes(app);

app.use( (req, res, next) => {
	// res.setHeader('Access-Control-Allow-Origin', '*');
	// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	// res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	// res.setHeader('Access-Control-Allow-Credentials', true);
	// res.setHeader("Content-Type", "text/plain");
	// res.setHeader("Content-Type", "application/json");

  res.status(400).send({ error: 'URL: '+req.originalUrl+' not found!'});
  next();
})

app.listen(port, () => console.log(`Server started on port ${port}`));