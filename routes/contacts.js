const express = require('express');
const router = express.Router();

const usersContoller = require('../controllers/contacts');

router.get('/', usersContoller.getAll);

router.get('/:id', usersContoller.getSingle);

router.post('/', usersContoller.createUser);

router.put('/:id', usersContoller.updateUser);

router.delete('/:id', usersContoller.deleteUser);

module.exports = router;