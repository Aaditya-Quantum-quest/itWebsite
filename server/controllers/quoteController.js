import Quote from '../models/Quote.js';

export const submitQuote = async (req, res, next) => {
  try {
    const quoteData = {
      ...req.body,
      ipAddress: req.ip,
    };
    
    const quote = await Quote.create(quoteData);
    
    // In a real app we'd dispatch emails here via nodemailer
    
    res.status(201).json({ 
      success: true, 
      message: "Quote request received! We'll get back to you within 24 hours.",
      data: { id: quote._id }
    });
  } catch (error) {
    next(error);
  }
};
