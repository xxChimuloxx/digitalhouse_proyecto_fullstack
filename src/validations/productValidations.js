const { body } = require('express-validator');
const { Category, Brand, Color } = require('../database/models');

const validImageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

const productValidations = [
  body('name')
    .trim()
    .notEmpty().withMessage('El nombre del producto es obligatorio.')
    .bail()
    .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres.'),
  body('description')
    .trim()
    .notEmpty().withMessage('La descripción es obligatoria.')
    .bail()
    .isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres.'),
  body('image')
    .trim()
    .custom(value => {
      if (!value) return true;
      const lower = value.toLowerCase();
      const isValid = validImageExtensions.some(ext => lower.endsWith(ext));
      if (!isValid) throw new Error('La imagen debe tener extensión JPG, JPEG, PNG o GIF.');
      return true;
    }),
  body('category_id')
    .notEmpty().withMessage('La categoría es obligatoria.')
    .bail()
    .custom(async value => {
      const category = await Category.findByPk(value);
      if (!category) throw new Error('La categoría seleccionada no existe.');
      return true;
    }),
  body('brand_id')
    .notEmpty().withMessage('La marca es obligatoria.')
    .bail()
    .custom(async value => {
      const brand = await Brand.findByPk(value);
      if (!brand) throw new Error('La marca seleccionada no existe.');
      return true;
    }),
  body('colors')
    .custom(async value => {
      if (!value) return true;
      const colorIds = Array.isArray(value) ? value : [value];
      const colors = await Color.findAll({ where: { id: colorIds } });
      if (colors.length !== colorIds.length) throw new Error('Uno o más colores seleccionados no existen.');
      return true;
    }),
  body('price')
    .notEmpty().withMessage('El precio es obligatorio.')
    .bail()
    .isFloat({ min: 1 }).withMessage('El precio debe ser un número mayor a cero.')
];

module.exports = { productValidations };
