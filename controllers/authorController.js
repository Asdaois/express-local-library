const Author = require("../models/author");
const Book = require("../models/book");
const async = require("async");

// Display list of all Authors.
exports.list = (req, res) => {
  Author.find()
    .sort([["family_name", "ascending"]])
    .exec((err, list_authors) => {
      if (err) return next(err);

      res.render("author/list", {
        title: "Author List",
        author_list: list_authors,
      });
    });
};

// Display detail page for a specific Author.
exports.detail = function (req, res, next) {
  async.parallel(
    {
      author: function (callback) {
        Author.findById(req.params.id).exec(callback);
      },
      authors_books: function (callback) {
        Book.find({ author: req.params.id }, "title summary").exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      } // Error in API usage.
      if (results.author == null) {
        // No results.
        var err = new Error("Author not found");
        err.status = 404;
        return next(err);
      } // Successful, so render.
      res.render("author/detail", {
        title: "Author Detail",
        author: results.author,
        author_books: results.authors_books,
      });
    }
  );
};

// Display Author create form on GET.
exports.create_get = (req, res) => {
  res.render("author/form", { title: "Create Author" });
};
const { body, validationResult } = require("express-validator");
// Handle Author create on POST.
exports.create_post = [
  // Validate and sanitize fields.
  body("first_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("First name must be specified.")
    .isAlphanumeric()
    .withMessage("First name has non-alphanumeric characters."),
  body("family_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Family name must be specified.")
    .isAlphanumeric()
    .withMessage("Family name has non-alphanumeric characters."),
  body("date_of_birth", "Invalid date of birth")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),
  body("date_of_death", "Invalid date of death")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors
      // Render form again with sanitized values / errors messages.
      res.render("author/form", {
        title: "Create Author",
        author: req.body,
        errors: errors.array(),
      });
      return;
    }

    // Data from form is valid.
    // Create an Author object with escaped and trimmed data.
    var author = new Author({
      first_name: req.body.first_name,
      family_name: req.body.family_name,
      date_of_birth: req.body.date_of_birth,
      date_of_death: req.body.date_of_death,
    });
    author.save(function (err) {
      if (err) {
        return next(err);
      }
      // Successful - redirect to new author record.
      res.redirect(author.url);
    });
  },
];

// Display Author delete form on GET.
exports.delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Handle Author delete on POST.
exports.delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Display Author update form on GET.
exports.update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Handle Author update on POST.
exports.update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};
