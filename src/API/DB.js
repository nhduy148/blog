require('dotenv').config();
const DB_URL = process.env.DB_URL || "mongodb://localhost2"
const DB_PORT = process.env.DB_PORT || 27017

const URL = `${DB_URL}:${DB_PORT}/`
const MongoClient = require('mongodb').MongoClient;


MongoClient.connect(URL, { useUnifiedTopology: true }, (err, db) => {
  console.log(db.db("blog").collection('posts'));
})