const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  devices: [{
    token: { type: String },
    type: { type: String },
    name: { type: String }
  }],
  hash: { type: String },
  IsVerified: { type: Boolean, default: false }
})

module.exports = mongoose.model('User', UserSchema)
