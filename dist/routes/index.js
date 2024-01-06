"use strict";

var express = require('express');
var _require = require('../controllers/movie.controller'),
  movieAdd = _require.movieAdd;
var router = express.Router();
router.route('/movie').post(movieAdd);
module.exports = router;