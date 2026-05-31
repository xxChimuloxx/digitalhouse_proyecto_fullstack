const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images/users'));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `user-${Date.now()}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = ['image/jpeg', 'image/png', 'image/gif'];
  if (!allowed.includes(file.mimetype)) {
    req.fileValidationError = 'La imagen debe ser JPG, JPEG, PNG o GIF.';
    return cb(null, false);
  }
  cb(null, true);
};

module.exports = multer({ storage, fileFilter });
