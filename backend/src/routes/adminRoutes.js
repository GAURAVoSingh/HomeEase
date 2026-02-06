import express from 'express';
import { listUsers, verifyProvider, blockUser, manageCategory, listBookings } from '../controllers/adminController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.use(protect, authorize('admin'));
router.get('/users', listUsers);
router.patch('/providers/:id/verify', verifyProvider);
router.patch('/users/:id/block', blockUser);
router.post('/categories', manageCategory);
router.get('/bookings', listBookings);

export default router;
