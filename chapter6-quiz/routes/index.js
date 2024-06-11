const router = require('express').Router();
const Product = require('./Product');
const Transaction = require('./Transaction');

router.use('/', Product);

module.exports = router;