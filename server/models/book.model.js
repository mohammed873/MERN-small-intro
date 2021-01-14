const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    bookname: {
      type: String,
      required: true,
      trim: true,
      minlenght: 12,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlenght: 120,
    },
    author: {
      type: String,
      required: true,
      trim: true,
      minlenght: 20,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
