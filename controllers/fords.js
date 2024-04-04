var fords = require('../models/fords');
// List of all fords
exports.fords_list = function (req, res) {
    res.send('NOT IMPLEMENTED: fordslist');
};
// for a specific fords.
exports.fords_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: fords detail: ' + req.params.id);
};
// Handle fords create on POST.
exports.fords_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: fords create POST');
};
// Handle fords delete from on DELETE.
exports.fords_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: fords delete DELETE ' + req.params.id);
};
// Handle fords update form on PUT.
exports.fords_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: fords update PUT' + req.params.id);
};


exports.fords_list = async function (req, res) {
    try {
        thefords = await fords.find();
        res.send(thefords);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.fords_view_all_Page = async function(req, res) {
    try{
    theFords = await fords.find();
    res.render('fords', { title: 'Ford Search Results', results: theFords });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle Costume create on POST.
exports.fords_create_post = async function(req, res) {
    console.log(req.body)
    let document = new fords();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.fords_name = req.body.fords_name;
    document.fords_price = req.body.fords_price;
    document.fords_year = req.body.fords_year;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    