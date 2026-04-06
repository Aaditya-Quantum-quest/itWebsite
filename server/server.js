import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { errorHandler } from './middleware/errorHandler.js';
import { apiLimiter } from './middleware/rateLimiter.js';

import quoteRoutes from './routes/quoteRoutes.js';
import consultationRoutes from './routes/consultationRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
connectDB();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));

// Apply rate limiter to all API routes
app.use('/api', apiLimiter);

// Routes
app.use('/api/quotes', quoteRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/contact', contactRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: new Date() }));

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
