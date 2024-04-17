var fords = require('../models/fords');
// List of all fords
exports.fords_list = function(req, res) {
 res.send('NOT IMPLEMENTED: fords list');
};
// for a specific fords.
exports.fords_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await fords.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
 
// Handle fords create on POST.
exports.fords_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: fords create POST');
};
// Handle fords delete from on DELETE.
exports.fords_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: fords delete DELETE ' + req.params.id);
};
// Handle fords delete on DELETE.
exports.fords_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await fords.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
   
// Handle fords update form on PUT.
exports.fords_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await fords.findById( req.params.id)
// Do updates of properties
if(req.body.fords_title)
toUpdate.fords_name = req.body.fords_name;
if(req.body.fords_price) toUpdate.fords_price = req.body.fords_price;
if(req.body.fords_year) toUpdate.fords_year = req.body.fords_year;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
 
 
exports.fords_list = async function(req, res) {
    try{
    thefords = await fords.find();
    res.send(thefords);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
 
 
exports.fords_view_all_Page = async function(req, res) {
    try{
    thefordss = await fords.find();
    res.render('fords', { title: 'fords Search Results', results: thefordss });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
 
 
    // Handle fords create on POST.
exports.fords_create_post = async function(req, res) {
    console.log(req.body)
    let document = new fords();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
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
   
    //Handle a show one view with id specified by query
    exports.fords_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await fords.findById( req.query.id)
    res.render('fordsdetail',
    { title: 'fords Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    exports.fords_create_Page = function(req, res) {
        console.log("create view")
        try{
        res.render('fordscreate', { title: 'fords Create'});
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };
        //Handle building the view for updating a costume.
// query provides the id
exports.fords_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await fords.findById(req.query.id)
    res.render('fordsupdate', { title: 'fords Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }
    exports.fords_delete_Page = async function (req, res) {
        console.log("Delete view for id " + req.query.id)
        try {
            result = await fords.findById(req.query.id)
            res.render('fordsdelete', {
                title: 'fords Delete', toShow:
                    result
            });
        }
        catch (err) {
            res.status(500)
            res.send(`{'error': '${err}'}`);
        }
    };

