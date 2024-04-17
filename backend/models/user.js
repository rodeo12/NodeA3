const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  profilePicture: {  // Field to store Cloudinary public ID
    type: String,
    default: null
  }
});

//Alternate Method to export
// const User= mongoose.model('User', userSchema);
// module.exports= User;

module.exports = mongoose.model('User', userSchema);