const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact');

/* GET home page. */
console.log('Inside app_server, routes, contact.js.\n');
router.get('/', controller.index);

module.exports = router;
