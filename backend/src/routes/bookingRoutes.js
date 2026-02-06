import express from 'express';
import { body } from 'express-validator';
import { createBooking, listBookings, updateBookingStatus, cancelBooking, estimatePrice } from '../controllers/bookingController.js';
import { protect, authorize } from '../middleware/auth.js';
import validate from '../middleware/validate.js';

const router = express.Router();

router.get('/estimate', protect, estimatePrice);
router.post(
  '/',
  protect,
  authorize('customer'),
  [
    body('providerId').notEmpty(),
    body('serviceCategory').notEmpty(),
    body('date').notEmpty(),
    body('timeSlot').notEmpty(),
    body('estimatedPrice').isNumeric(),
  ],
  validate,
  createBooking
);
router.get('/', protect, listBookings);
router.patch('/:id/status', protect, authorize('provider', 'admin'), updateBookingStatus);
router.patch('/:id/cancel', protect, authorize('customer'), cancelBooking);

export default router;
