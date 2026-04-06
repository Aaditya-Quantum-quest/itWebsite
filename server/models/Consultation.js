import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  date: { type: Date, required: true },
  timeSlot: { type: String, required: true },
  meetingType: { type: String, enum: ['30min', '60min'], default: '30min' },
  projectBrief: String,
  meetLink: String,
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  reminderSent: { type: Boolean, default: false },
  ipAddress: String
}, { timestamps: true });

export default mongoose.model('Consultation', consultationSchema);
