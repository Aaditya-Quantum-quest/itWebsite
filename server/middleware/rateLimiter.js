import rateLimit from 'express-rate-limit';

export const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 form submissions per window
  message: { success: false, message: "Too many requests. Try again in 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
