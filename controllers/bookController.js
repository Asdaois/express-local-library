const Book = require("../models/book");
const BookInstance = require("../models/bookInstance");
const Author = require("../models/author");
const Genre = require("../models/genre");
const async = require("async");

exports.index = (req, res) => {
  async.parallel(
    {
      book_count: (callback) => {
        Book.countDocuments({}, callback);
      },
      book_instance_count: (callback) => {
        BookInstance.countDocuments({}, callback);
      },
      book_instance_available_count: (callback) => {
        BookInstance.countDocuments({ status: "Available" }, callback);
      },
      author_count: (callback) => {
        Author.countDocuments({}, callback);
      },
      genre_count: (callback) => {
        Genre.countDocuments({}, callback);
      },
    },
    (err, results) => {
      res.render("index", {
        title: "Local Library Home",
        error: err,
        data: results,
      });
    }
  );
};

// Display list of all books.
exports.list = (req, res) => {
  Book.find({}, "title author")
    .sort({ title: 1 })
    .populate("author")
    .exec((err, list_books) => {
      if (err) return next(err);
      res.render("book_list", { title: "Book List", book_list: list_books });
    });
};

// Display detail page for a specific book.
exports.detail = (req, res) => {
  res.send("NOT IMPLEMENTED: Book detail: " + req.params.id);
};

// Display book create form on GET.
exports.create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Book create GET");
};

// Handle book create on POST.
exports.create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Book create POST");
};

// Display book delete form on GET.
exports.delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

// Handle book delete on POST.
exports.delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

// Display book update form on GET.
exports.update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Book update GET");
};

// Handle book update on POST.
exports.update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Book update POST");
};
