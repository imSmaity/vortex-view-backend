const mongoose = require('mongoose');

const movieSchema = mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      required: ['true', 'ID required'],
    },
    comment: {
      type: String,
      trim: true,
      required: ['true', 'Comment required'],
    },
    rating: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: { createdAt: 'cts', updatedAt: 'mts' },
    collection: 'movie.list',
  },
);

module.exports = movieSchema;
