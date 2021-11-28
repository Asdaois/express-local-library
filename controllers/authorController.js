const Author = require("../models/author");
// Display list of all Authors.
exports.list = (req, res) => {
  Author.find()
    .sort([["family_name", "ascending"]])
    .exec((err, list_authors) => {
      if (err) return next(err);

      res.render("author_list", {
        title: "Author List",
        author_list: list_authors,
      });
    });
};

// Display detail page for a specific Author.
exports.detail = (req, res) => {
  res.send("NOT IMPLEMENTED: Author detail: " + req.params.id);
};

// Display Author create form on GET.
exports.create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// Handle Author create on POST.
exports.create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create POST");
};

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
