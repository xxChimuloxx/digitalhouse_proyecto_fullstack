const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const uploadUserImage = require('../middlewares/uploadUserImage');
const { registerValidations, loginValidations, userEditValidations } = require('../validations/userValidations');

router.get('/register', guestMiddleware, userController.register);
router.post('/register', guestMiddleware, uploadUserImage.single('image'), registerValidations, userController.store);
router.get('/login', guestMiddleware, userController.login);
router.post('/login', guestMiddleware, loginValidations, userController.processLogin);
router.get('/profile', authMiddleware, userController.profile);
router.post('/logout', userController.logout);

router.get('/', authMiddleware, userController.list);
router.get('/:id', authMiddleware, userController.detail);
router.get('/:id/edit', authMiddleware, userController.edit);
router.put('/:id', authMiddleware, uploadUserImage.single('image'), userEditValidations, userController.update);

module.exports = router;
