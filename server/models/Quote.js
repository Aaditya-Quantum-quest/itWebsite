import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxLength: 100 },
  email: { type: String, required: true, lowercase: true },
  phone: { type: String },
  company: { type: String },
  serviceType: { 
    type: String, 
    enum: ['web', 'mobile', 'uiux', 'cloud', 'ai', 'fullstack', 'other'],
    required: true 
  },
  budget: { type: String, required: true },
  timeline: { type: String },
  description: { type: String, required: true, maxLength: 2000 },
  attachments: [{ filename: String, url: String }],
  status: { 
    type: String, 
    enum: ['new', 'reviewing', 'quoted', 'accepted', 'rejected'],
    default: 'new'
  },
  ipAddress: String
}, { timestamps: true });

export default mongoose.model('Quote', quoteSchema);
