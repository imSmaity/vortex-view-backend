const ReviewModel = require('../models/review.model');

const reviewAdd = async (req, res) => {
  try {
    const { movieId, comment, rating } = req.body;

    const review = new ReviewModel({
      movieId,
      comment,
      rating,
    });
    await review.save();

    res.status(202).send({
      success: true,
      message: 'review added',
      userMessage: 'Successfully movie added',
    });
  } catch (error) {
    console.log(error);
    res.status(403).send({
      success: false,
      message: 'Review not added',
      userMessage: 'Something went wrong!',
    });
  }
};

const getReviews = async (req, res) => {
  try {
    const { movieId } = req.body.params;

    const reviews = await ReviewModel.find({
      movieId,
    });

    res.status(202).send({
      success: true,
      message: 'Fetched review',
      userMessage: '',
      reviews,
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

module.exports = {
  reviewAdd,
  getReviews,
};
