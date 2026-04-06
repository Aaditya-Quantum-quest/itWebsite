import express from 'express';
import { submitQuote } from '../controllers/quoteController.js';
import { validateQuote } from '../middleware/validate.js';
import { formLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/', formLimiter, validateQuote, submitQuote);

export default router;
