const express = require('express');
const router = express.Router();

const usersContoller = require('../controllers/contacts');

router.get('/', usersContoller.getAll);

router.get('/:id', usersContoller.getSingle);

module.exports = router;