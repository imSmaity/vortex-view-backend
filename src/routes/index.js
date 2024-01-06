const express = require('express');
const { movieAdd } = require('../controllers/movie.controller');
const router = express.Router();

router.route('/movie').post(movieAdd);

module.exports = router;
