import express from 'express';
import { submitContact } from '../controllers/contactController.js';
import { validateContact } from '../middleware/validate.js';
import { formLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/', formLimiter, validateContact, submitContact);

export default router;
