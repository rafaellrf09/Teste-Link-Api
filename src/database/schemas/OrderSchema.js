const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  total: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
}

);

module.exports = mongoose.model('orders', OrderSchema);