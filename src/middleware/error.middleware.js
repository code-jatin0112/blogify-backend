exports.notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
};

exports.errorHandler = (err, req, res, next) => {

  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });

};