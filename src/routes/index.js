const express = require('express');
const {
  movieAdd,
  deleteMovie,
  getMovies,
} = require('../controllers/movie.controller');
const { reviewAdd, getReviews } = require('../controllers/review.controller');
const router = express.Router();

router.route('/movie').post(movieAdd).get(getMovies).delete(deleteMovie);
router.route('/movie/review').post(reviewAdd);
router.route('/movie/reviews/:movieId').get(getReviews);

module.exports = router;
