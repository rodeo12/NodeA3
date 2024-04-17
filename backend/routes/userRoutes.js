const express = require('express');
const multer = require('multer');
const User = require('../models/user');
const cloudinary = require('../cloudinary');

const upload = multer({ dest: 'uploads/' }); // Optional: Temporary storage for uploads

const router = express.Router();

router.post('/upload-profile-picture', upload.single('profilePicture'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const user = await User.findByIdAndUpdate(req.userId, { profilePicture: result.public_id }, { new: true }); // Update user with profilePicture

    if (user) {
      res.json({ message: 'Profile picture uploaded successfully.', user });
    } else {
      res.status(400).json({ message: 'Error updating user profile.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;

