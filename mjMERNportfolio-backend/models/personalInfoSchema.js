const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personalInfoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
  },
}, { timestamps: true });

module.exports = mongoose.model('PersonalInfo', personalInfoSchema);
