const mongoose = require('mongoose');
const reviewSchema = require('../schemas/Review');

const ReviewModel = mongoose.model('review.list', reviewSchema);

module.exports = ReviewModel;
