var express = require('express');
const ford_controlers= require('../controllers/fords');
var router = express.Router();
/* GET costumes */
router.get('/', ford_controlers.fords_view_all_Page );
module.exports = router;