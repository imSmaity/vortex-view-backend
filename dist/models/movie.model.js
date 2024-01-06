"use strict";

var mongoose = require('mongoose');
var movieSchema = require('../schemas/movie');
var MovieModel = mongoose.model('movie.list', movieSchema);
module.exports = MovieModel;