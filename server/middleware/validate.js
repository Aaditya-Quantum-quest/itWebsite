import { body, validationResult } from 'express-validator';

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }
  next();
};

export const validateQuote = [
  body('name').notEmpty().trim().isLength({ max: 100 }).withMessage('Name is required and must be less than 100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').optional().isString(),
  body('serviceType').isIn(['web','mobile','uiux','cloud','ai','fullstack','other']).withMessage('Invalid service type'),
  body('budget').notEmpty().withMessage('Budget is required'),
  body('description').notEmpty().isLength({ max: 2000 }).withMessage('Description required (max 2000 chars)'),
  handleValidationErrors
];

export const validateConsultation = [
  body('name').notEmpty().trim(),
  body('email').isEmail().normalizeEmail(),
  body('date').isISO8601(),
  body('timeSlot').notEmpty(),
  handleValidationErrors
];

export const validateContact = [
  body('name').notEmpty().trim(),
  body('email').isEmail().normalizeEmail(),
  body('message').notEmpty().isLength({ max: 1000 }),
  handleValidationErrors
];
