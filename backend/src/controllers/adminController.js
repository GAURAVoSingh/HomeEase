import User from '../models/User.js';
import ProviderProfile from '../models/ProviderProfile.js';
import ServiceCategory from '../models/ServiceCategory.js';
import Booking from '../models/Booking.js';

export const listUsers = async (req, res, next) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const verifyProvider = async (req, res, next) => {
  try {
    const profile = await ProviderProfile.findOneAndUpdate(
      { user: req.params.id },
      { verificationStatus: req.body.status || 'verified' },
      { new: true }
    );
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (error) {
    next(error);
  }
};

export const blockUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { isBlocked: true }, { new: true });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const manageCategory = async (req, res, next) => {
  try {
    const category = await ServiceCategory.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

export const listBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find()
      .populate('customer', 'name')
      .populate('provider', 'name')
      .populate('serviceCategory', 'name');
    res.json(bookings);
  } catch (error) {
    next(error);
  }
};
