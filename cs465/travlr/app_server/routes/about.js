const express = require('express');
const router = express.Router();
const controller = require('../controllers/about');

/* GET home page. */
console.log('Inside app_server, routes, about.js.\n');
router.get('/', controller.index);

module.exports = router;
