const path = require('path');
const { body } = require('express-validator');
const { User } = require('../database/models');

const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

const imageValidation = body('image').custom((value, { req }) => {
  if (req.fileValidationError) throw new Error(req.fileValidationError);
  if (!req.file) return true;
  const ext = path.extname(req.file.originalname).toLowerCase();
  if (!allowedExtensions.includes(ext)) {
    throw new Error('La imagen debe ser JPG, JPEG, PNG o GIF.');
  }
  return true;
});

const registerValidations = [
  body('firstName')
    .trim()
    .notEmpty().withMessage('El nombre es obligatorio.')
    .bail()
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres.'),
  body('lastName')
    .trim()
    .notEmpty().withMessage('El apellido es obligatorio.')
    .bail()
    .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres.'),
  body('email')
    .trim()
    .notEmpty().withMessage('El email es obligatorio.')
    .bail()
    .isEmail().withMessage('Debés ingresar un email válido.')
    .bail()
    .custom(async value => {
      const user = await User.findOne({ where: { email: value } });
      if (user) throw new Error('Ya existe un usuario registrado con ese email.');
      return true;
    }),
  body('password')
    .notEmpty().withMessage('La contraseña es obligatoria.')
    .bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres.'),
  body('confirmPassword')
    .notEmpty().withMessage('Debés confirmar la contraseña.')
    .bail()
    .custom((value, { req }) => {
      if (value !== req.body.password) throw new Error('Las contraseñas no coinciden.');
      return true;
    }),
  imageValidation
];

const loginValidations = [
  body('email')
    .trim()
    .notEmpty().withMessage('El email es obligatorio.')
    .bail()
    .isEmail().withMessage('Debés ingresar un email válido.')
    .bail()
    .custom(async value => {
      const user = await User.findOne({ where: { email: value } });
      if (!user) throw new Error('No existe un usuario registrado con ese email.');
      return true;
    }),
  body('password')
    .notEmpty().withMessage('La contraseña es obligatoria.')
];

const userEditValidations = [
  body('firstName')
    .trim()
    .notEmpty().withMessage('El nombre es obligatorio.')
    .bail()
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres.'),
  body('lastName')
    .trim()
    .notEmpty().withMessage('El apellido es obligatorio.')
    .bail()
    .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres.'),
  body('email')
    .trim()
    .notEmpty().withMessage('El email es obligatorio.')
    .bail()
    .isEmail().withMessage('Debés ingresar un email válido.')
    .bail()
    .custom(async (value, { req }) => {
      const user = await User.findOne({ where: { email: value } });
      if (user && Number(user.id) !== Number(req.params.id)) {
        throw new Error('Ya existe otro usuario registrado con ese email.');
      }
      return true;
    }),
  imageValidation
];

module.exports = { registerValidations, loginValidations, userEditValidations };
