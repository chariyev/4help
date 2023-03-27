const express = require('express');
const router = express.Router({ caseSensitive: true });
const authControllers = require('../controllers/authControllers');

router.post('/', authControllers.login);

module.exports = router;
