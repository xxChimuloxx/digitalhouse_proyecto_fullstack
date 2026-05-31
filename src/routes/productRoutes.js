const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { productValidations } = require('../validations/productValidations');

router.get('/', productController.list);
router.get('/create', productController.create);
router.post('/', productValidations, productController.store);
router.get('/:id', productController.detail);
router.get('/:id/edit', productController.edit);
router.put('/:id', productValidations, productController.update);
router.delete('/:id', productController.destroy);

module.exports = router;
