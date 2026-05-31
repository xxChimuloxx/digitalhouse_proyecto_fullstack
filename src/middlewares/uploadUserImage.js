const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images/users'));
  },
  filename: (req, file, cb) => {
    const uniqueName = `user-${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const fileExtension = path.extname(file.originalname).toLowerCase();

  if (allowedExtensions.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(new Error('Solo se permiten imágenes JPG, JPEG, PNG, GIF o WEBP'));
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
