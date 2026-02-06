import express from 'express';
import { getProviderProfile, updateProviderProfile, providerDashboard } from '../controllers/providerController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.put('/profile', protect, authorize('provider'), updateProviderProfile);
router.get('/dashboard/summary', protect, authorize('provider'), providerDashboard);
router.get('/:id', getProviderProfile);

export default router;
