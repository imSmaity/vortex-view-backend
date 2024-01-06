"use strict";

var mongoose = require('mongoose');
var movieSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: ['true', 'Movie Name required']
  },
  releaseDate: {
    type: String,
    trim: true,
    required: ['true', 'Release required']
  },
  rating: {
    type: Number,
    "default": null
  }
}, {
  timestamps: {
    createdAt: 'cts',
    updatedAt: 'mts'
  },
  collection: 'movie.list'
});
module.exports = movieSchema;