const mongoose = require('mongoose');
const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Artist name is required']
  },
  style: {
    type: String,
    required: [true, 'Artist music style is required']
  },
  city: {
    type: String ,
    required: [true, 'Artist home town is required']
  },
  album: {
    type: String,
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

const Concert = mongoose.model('Artist', ArtistSchema);
module.exports = Artist;
