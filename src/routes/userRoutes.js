const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const uploadUserImage = require('../middlewares/uploadUserImage');

router.get('/register', guestMiddleware, userController.register);
router.post('/register', guestMiddleware, uploadUserImage.single('image'), userController.processRegister);

router.get('/login', guestMiddleware, userController.login);
router.post('/login', guestMiddleware, userController.processLogin);

router.get('/profile', authMiddleware, userController.profile);
router.post('/logout', authMiddleware, userController.logout);

module.exports = router;
