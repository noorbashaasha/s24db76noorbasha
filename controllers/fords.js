var ford = require('../model/fords');
// List of all fords
exports.fords_list = function(req, res) {
res.send('NOT IMPLEMENTED: fords list');
};
// for a specific fords.
exports.fords_detail = function(req, res) {
res.send('NOT IMPLEMENTED: fords detail: ' + req.params.id);
};
// Handle fords create on POST.
exports.fords_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: fords create POST');
};
// Handle fords delete from on DELETE.
exports.fords_delete = function(req, res) {
res.send('NOT IMPLEMENTED: fords delete DELETE ' + req.params.id);
};
// Handle fords update form on PUT.
exports.fords_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: fords update PUT' + req.params.id);
};
// List of all fords
exports.ford_list = async function(req, res) {
    try{
    thefords = await ford.find();
    res.send(thefords);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    