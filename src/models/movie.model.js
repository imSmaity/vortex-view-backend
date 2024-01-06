const mongoose = require('mongoose');
const movieSchema = require('../schemas/movie');

const MovieModel = mongoose.model('movie.list', movieSchema);

module.exports = MovieModel;
