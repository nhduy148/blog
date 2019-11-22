require('dotenv').config({path: __dirname+'../.env'});
const DB_URL = process.env.DB_URL || "mongodb://localhost2"
const DB_PORT = process.env.DB_PORT || 27017
const DB_NAME = process.env.DB_NAME

const URL = `${DB_URL}:${DB_PORT}/`
const MongoClient = require('mongodb').MongoClient;


module.exports = {
  open: () => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, { useUnifiedTopology: true }, (err, db) => {
        if (err) reject(err);
        else resolve(db.db(DB_NAME));
      })
    })
  },

  close: (db) => {
    if (db) db.close();
  }
}
