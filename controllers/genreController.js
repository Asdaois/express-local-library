const Genre = require('../models/genre');

// Display list of all Genre.
exports.list = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Genre list');
};

// Display detail page for a specific Genre.
exports.detail = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
};

// Display Genre create form on GET.
exports.create_get = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Genre create GET');
};

// Handle Genre create on POST.
exports.create_post = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Genre create POST');
};

// Display Genre delete form on GET.
exports.delete_get = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
exports.delete_post = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
exports.update_get = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
exports.update_post = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Genre update POST');
};
