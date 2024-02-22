const express = require('express');
const router = express.Router();
const controller = require('../controllers/news');

/* GET home page. */
console.log('Inside app_server, routes, news.js.\n');
router.get('/', controller.index);

module.exports = router;
