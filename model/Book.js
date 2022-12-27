const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 10,
    },
    language: {
      type: String,
      required: true,
    },
    pages: {
      type: Number,
    },
    comm: {
      type: Array,
    },
    linkToDown: {
      type: String,
      required: true,
    },
    linkToRead: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Book', BookSchema);
