const express = require('express');
const router = express.Router();
const controller = require('../controllers/rooms');

/* GET home page. */
console.log('Inside app_server, routes, rooms.js.\n');
router.get('/', controller.index);

module.exports = router;
