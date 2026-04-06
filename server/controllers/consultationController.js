import Consultation from '../models/Consultation.js';

export const bookConsultation = async (req, res, next) => {
  try {
    const { date, timeSlot } = req.body;
    
    // Simplistic collision check
    const existing = await Consultation.findOne({
      date: new Date(date),
      timeSlot,
      status: { $ne: 'cancelled' }
    });
    
    if (existing) {
      return res.status(409).json({ 
        success: false, message: "This slot was just booked. Please select another." 
      });
    }
    
    const meetLink = `https://meet.google.com/mock-link-${Date.now().toString(36)}`;
    
    const consultation = await Consultation.create({
      ...req.body,
      meetLink,
      ipAddress: req.ip
    });
    
    res.status(201).json({ 
      success: true, 
      message: "Consultation booked successfully!",
      data: { id: consultation._id, meetLink, date: consultation.date, timeSlot: consultation.timeSlot }
    });
  } catch (error) {
    next(error);
  }
};

export const getAvailableSlots = async (req, res, next) => {
  try {
    const { date } = req.query;
    if (!date) return res.status(400).json({ success: false, message: "Date required" });
    
    const ALL_SLOTS = [
      "09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "05:00 PM"
    ];
    
    const startOfDay = new Date(date);
    startOfDay.setHours(0,0,0,0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23,59,59,999);
    
    const booked = await Consultation.find({
      date: { $gte: startOfDay, $lte: endOfDay },
      status: { $ne: 'cancelled' }
    }).select('timeSlot');
    
    const bookedSlots = booked.map(b => b.timeSlot);
    const available = ALL_SLOTS.filter(s => !bookedSlots.includes(s));
    
    res.json({ success: true, data: { available, booked: bookedSlots } });
  } catch (error) {
    next(error);
  }
};
