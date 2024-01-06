const MovieModel = require('../models/movie.model');
const ReviewModel = require('../models/review.model');

const movieAdd = async (req, res) => {
  try {
    const { name, releaseDate } = req.body;

    const movie = new MovieModel({
      name,
      releaseDate,
    });

    await movie.save();
    res.status(202).send({
      success: true,
      message: 'movie added',
      userMessage: 'Successfully movie added',
    });
  } catch (error) {
    console.log(error);
    res.status(403).send({
      success: false,
      message: 'Movie not added',
      userMessage: 'Something went wrong!',
    });
  }
};

const getMovies = async (req, res) => {
  try {
    const movies = await MovieModel.find();

    res.status(202).send({
      success: true,
      message: 'Fetched movies',
      userMessage: '',
      movies,
    });
  } catch (error) {
    console.log(error);
    res.status(403).send({
      success: false,
      message: 'Failed fetching',
      userMessage: 'Something went wrong!',
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { movieId } = req.body;

    await ReviewModel.deleteMany({ movieId });
    await MovieModel.delete({ _id: movieId });

    res.status(202).send({
      success: true,
      message: 'Movie deleted',
      userMessage: 'Movie Deleted',
    });
  } catch (error) {
    console.log(error);
    res.status(403).send({
      success: false,
      message: 'Deleted failed',
      userMessage: 'Something went wrong!',
    });
  }
};

module.exports = {
  movieAdd,
  getMovies,
  deleteMovie,
};
