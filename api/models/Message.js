const mongoose = require('mongoose');

//creating our message schema to store message information
const MessageSchema = new mongoose.Schema({
  sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  recipient: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  text: String,
  file: String,
}, {timestamps:true});

//To use our schema definition, we need to convert our MessageSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):
const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;