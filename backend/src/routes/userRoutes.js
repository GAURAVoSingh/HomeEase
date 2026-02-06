import express from 'express';
import { updateProfile, listProviders } from '../controllers/userController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/providers', listProviders);
router.put('/profile', protect, authorize('customer', 'provider', 'admin'), updateProfile);

export default router;
