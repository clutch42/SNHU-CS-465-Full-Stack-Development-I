const express = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

/* GET travel page. */
console.log('Inside app_server, routes, travel.js.\n');
//router.get('/', controller.travelList);
//router.get('/:tripCode', controller.travelDetails);

router
    .route('/')
    .get(controller.travelList);
router
    .route('/:tripCode')
    .get(controller.travelDetails);


module.exports = router;
