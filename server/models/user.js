const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  role: {
    type: String,
    require: true,
    default: 'User'
  },
  tasks: [
    { 
      type: mongoose.Schema.Types.ObjectId,  
      ref: 'Todo'
    }
  ]
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)