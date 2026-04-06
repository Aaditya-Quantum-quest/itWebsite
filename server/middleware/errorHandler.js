export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  if (err.name === 'ValidationError') {
    return res.status(422).json({ 
      success: false, 
      message: Object.values(err.errors).map(e => e.message).join(', ')
    });
  }
  
  if (err.code === 11000) {
    return res.status(409).json({ success: false, message: "Duplicate entry" });
  }
  
  res.status(err.statusCode || 500).json({ 
    success: false, 
    message: err.message || "Internal server error" 
  });
};
