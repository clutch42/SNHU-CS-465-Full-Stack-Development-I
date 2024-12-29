const express = require('express');
const router = express.Router();
const controller = require('../controllers/meals');

/* GET home page. */
console.log('Inside app_server, routes, meals.js.\n');
router.get('/', controller.index);

module.exports = router;
