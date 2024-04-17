var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var fords_controller = require('../controllers/fords');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// fords ROUTES ///
// POST request for creating a fords.
router.post('/fords', fords_controller.fords_create_post);
// PUT request to update fords.
router.put('/fords/:id', fords_controller.fords_update_put);
// GET request for one fords.
router.get('/fords/:id', fords_controller.fords_detail);
// GET request for list of all fords items.
router.get('/fords', fords_controller.fords_list);
module.exports = router;
