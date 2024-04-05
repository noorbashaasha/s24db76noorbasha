var express = require('express');
const ford_controlers= require('../controllers/fords');
var router = express.Router();
/* GET costumes */
router.get('/', ford_controlers.fords_view_all_Page );
// GET request for one costume.
router.get('/fords/:id', ford_controlers.fords_detail)
module.exports = router;