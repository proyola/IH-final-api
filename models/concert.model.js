const mongoose = require('mongoose');
const concertSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: [true, 'Artist is required']
  },
  venue: {
    type: String,
    required: [true, 'Venue is required']
  },
  location: {
    type: String ,
    required: [true, 'Location is required']
  },
  date: {
    type: Date,
    required: [true, 'Date is required']
  }
}, {
  timestamp: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret._v;
      return ret;
    }
  }
});

const Concert = mongoose.model('Concert', ConcertSchema);
module.exports = Concert;
