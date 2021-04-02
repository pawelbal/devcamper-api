const express = require('express');
const { register, login, getMe } = require('../controllers/authContr');

const router = express.Router();

// Bring authorization middleware
const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;