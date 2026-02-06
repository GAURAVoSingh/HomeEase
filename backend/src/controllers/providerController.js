import ProviderProfile from '../models/ProviderProfile.js';
import Booking from '../models/Booking.js';

export const getProviderProfile = async (req, res, next) => {
  try {
    const profile = await ProviderProfile.findOne({ user: req.params.id })
      .populate('user', 'name email phone location')
      .populate('serviceCategories', 'name');
    if (!profile) return res.status(404).json({ message: 'Provider not found' });
    return res.json(profile);
  } catch (error) {
    return next(error);
  }
};

export const updateProviderProfile = async (req, res, next) => {
  try {
    const profile = await ProviderProfile.findOneAndUpdate(
      { user: req.user._id },
      req.body,
      { new: true }
    );
    res.json(profile);
  } catch (error) {
    next(error);
  }
};

export const providerDashboard = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ provider: req.user._id });
    const earnings = bookings.filter((b) => b.status === 'completed').reduce((sum, b) => sum + b.estimatedPrice, 0);
    res.json({
      totalBookings: bookings.length,
      pending: bookings.filter((b) => b.status === 'pending').length,
      earnings,
    });
  } catch (error) {
    next(error);
  }
};
