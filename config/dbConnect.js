const mongoose = require('mongoose');
const { dbConnectionURL, options } = require('./dbConfig');

function dbConnect() {
  mongoose.connect(dbConnectionURL, options, (err) => {
    if (err) return console.log('Atlas DB connection failed...', err);
    console.log('Atlas DB Connected Successfully');
  });
}

module.exports = dbConnect;
