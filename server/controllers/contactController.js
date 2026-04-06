import Contact from '../models/Contact.js';

export const submitContact = async (req, res, next) => {
  try {
    const contact = await Contact.create({
      ...req.body,
      ipAddress: req.ip
    });
    
    res.status(201).json({ 
      success: true, 
      message: "Message received successfully."
    });
  } catch (error) {
    next(error);
  }
};
