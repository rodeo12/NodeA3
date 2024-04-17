const cloudinary = require('cloudinary').v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret'
});

module.exports = cloudinary;
