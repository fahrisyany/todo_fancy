const mongoose = require('mongoose')

const stickerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  imageUrl: {
    type: String,
    require: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Sticker', stickerSchema)