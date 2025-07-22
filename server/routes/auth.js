const express = require('express');
const router = express.Router();
const { login, guestAccess } = require('../controllers/authController');

router.post('/login', login);
router.post('/guest', guestAccess);

module.exports = router;
