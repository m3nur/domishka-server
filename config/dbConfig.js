const dotnv = require('dotenv').config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 1000,
  },
};

const dbConnectionURL = process.env.CONNECTION_URL;

module.exports = {
  dbConnectionURL,
  options,
};
