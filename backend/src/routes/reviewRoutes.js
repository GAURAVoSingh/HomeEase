import express from 'express';
import { body } from 'express-validator';
import { createReview, listProviderReviews } from '../controllers/reviewController.js';
import { protect, authorize } from '../middleware/auth.js';
import validate from '../middleware/validate.js';

const router = express.Router();

router.post(
  '/',
  protect,
  authorize('customer'),
  [
    body('bookingId').notEmpty(),
    body('providerId').notEmpty(),
    body('rating').isInt({ min: 1, max: 5 }),
  ],
  validate,
  createReview
);

router.get('/provider/:id', listProviderReviews);

export default router;
