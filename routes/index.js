'use strict'

const express = require('express');
const router = express.Router();
const email = require('./email');

router.use('/email', email);

module.exports = router;