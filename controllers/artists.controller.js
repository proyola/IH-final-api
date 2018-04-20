const mongoose = require ('mongoose');
const Artist = require ('../models/artist.model');
const ApiError = require('../models/api-error.model');

module.exports.list = (req, res, next) => {
  Artist.find()
    .then(artists => res.json(artists))
    .catch(error => next(error));
};

module.exports.get = (req, res, next) => {
  const id = req.params.id;
  Artist.findById(id)
    .then(artist => {
      if (artist) {
        res.json(artist);
      } else {
        next(new ApiError(`Artist not found`, 404));
      }
    }).catch(error => next(error));
};

module.exports.create = (req, res, next) => {
  const artist = new Artist(req.body);
  if (req.file) {
    artist.image = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  }
  artist.save()
    .then(() => {
      res.status(201).json(artist);
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        next(new ApiError(error.errors));
      } else {
        next(new ApiError(error.message, 500));
      }
    });
};

module.exports.delete = (req, res, next) => {
  const id = req.params.id;
  Artist.findByIdAndRemove(id)
    .then(artist => {
      if (artist) {
        res.status(204).json();
      } else {
        next(new ApiError(`Artist not found`, 404));
      }
    }).catch(error => next(error));
};

module.exports.edit = (req, res, next) => {
  const id = req.params.id;
  if (req.file) {
    body.image = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  }

  Artist.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then(artist => {
      if (artist) {
        res.json(artist);
      } else {
        next(new ApiError(`Artist not found`, 404));
      }
    }).catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        next(new ApiError(error.message, 400, error.errors));
      } else {
        next(new ApiError(error.message, 500));
      }
    });
};
