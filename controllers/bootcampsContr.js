// Get all bootcamps
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show all bootcamps',
  });
};

// Get single bootcamp
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show a bootcamp ${req.params.id}`,
  });
};

// Create new bootcamp
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Create new bootcamp',
  });
};

// Update bootcamp
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update a bootcamp ${req.params.id}`,
  });
};

// Delete bootcamp
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete a bootcamp ${req.params.id}`,
  });
};
