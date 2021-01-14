const router = require("express").Router();
let Book = require("../models/book.model");

router.route("/").get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/add").post((req, res) => {
  const bookname = req.body.bookname;
  const description = req.body.description;
  const author = req.body.author;
  const date = Date.parse(req.body.date);

  const newBook = new Book({
    bookname,
    description,
    author,
    date,
  });

  newBook
    .save()
    .then(() => res.json("book successfully added"))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/:id").get((req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/delete/:id").delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json("book successfully delted"))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/update/:id").post((req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      book.bookname = req.body.bookname;
      book.description = req.body.description;
      book.author = req.body.author;
      book.date = Date.parse(req.body.date);

      book
        .save()
        .then(() => res.json("book successfully updated"))
        .catch((err) => res.status(400).json("Error :" + err));
    })
    .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;
