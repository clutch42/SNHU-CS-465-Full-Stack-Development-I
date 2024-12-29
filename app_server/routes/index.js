const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');

/* GET home page. */
console.log('Inside app_server, routes, index.js.\n');
router.get('/', controller.index);

module.exports = router;
