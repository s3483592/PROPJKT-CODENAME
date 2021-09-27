const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('../Utils')

// schema
const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  image: {
    type: String,
    required: true    
  }
  
  
}, { timestamps: true })

// model
const messageModel = mongoose.model('Message', messageSchema)

// export
module.exports = messageModel
