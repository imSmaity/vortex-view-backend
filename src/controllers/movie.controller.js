const movieAdd = async (req, res) => {
  try {
    const { name, releaseDate, rating } = req.body;

    res.status(202).send({
      success: true,
      message: 'New user created',
      userMessage: 'Register success',
      token,
      user: selectedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(403).send({
      success: false,
      message: 'New user creation failed',
      userMessage: 'Register failed',
    });
  }
};

module.exports = {
  movieAdd,
};
