import express from 'express';
import { bookConsultation, getAvailableSlots } from '../controllers/consultationController.js';
import { validateConsultation } from '../middleware/validate.js';
import { formLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.get('/available-slots', getAvailableSlots);
router.post('/', formLimiter, validateConsultation, bookConsultation);

export default router;
