var express = require('express');
const fords_controllers= require('../controllers/fords');
var router = express.Router();
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
/* GET costumes */
router.get('/', fords_controllers.fords_view_all_Page );
/* GET detail food page */
router.get('/detail', fords_controllers.fords_view_one_Page);
router.get('/create', secured, fords_controllers.fords_create_Page);
router.get('/update', secured, fords_controllers.fords_update_Page);
router.get('/delete', secured, fords_controllers.fords_delete_Page);
module.exports = router;