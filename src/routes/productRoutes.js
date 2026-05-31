const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.list);
router.get('/detail/:id', productController.detail);
router.get('/create', productController.create);
router.get('/edit/:id', productController.edit);

module.exports = router;
