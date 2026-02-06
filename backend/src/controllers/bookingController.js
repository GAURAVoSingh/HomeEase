import Booking from '../models/Booking.js';
import ProviderProfile from '../models/ProviderProfile.js';

export const createBooking = async (req, res, next) => {
  try {
    const { providerId, serviceCategory, date, timeSlot, estimatedPrice, location, notes } = req.body;
    const booking = await Booking.create({
      customer: req.user._id,
      provider: providerId,
      serviceCategory,
      date,
      timeSlot,
      estimatedPrice,
      location,
      notes,
    });
    res.status(201).json(booking);
  } catch (error) {
    next(error);
  }
};

export const listBookings = async (req, res, next) => {
  try {
    const query = req.user.role === 'provider' ? { provider: req.user._id } : { customer: req.user._id };
    const bookings = await Booking.find(query)
      .populate('serviceCategory', 'name')
      .populate('provider', 'name')
      .populate('customer', 'name');
    res.json(bookings);
  } catch (error) {
    next(error);
  }
};

export const updateBookingStatus = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    booking.status = req.body.status || booking.status;
    await booking.save();
    res.json(booking);
  } catch (error) {
    next(error);
  }
};

export const cancelBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    booking.status = 'cancelled';
    await booking.save();
    res.json(booking);
  } catch (error) {
    next(error);
  }
};

export const estimatePrice = async (req, res, next) => {
  try {
    const { providerId, serviceKey } = req.query;
    const profile = await ProviderProfile.findOne({ user: providerId });
    if (!profile) return res.status(404).json({ message: 'Provider not found' });
    const price = profile.pricing.get(serviceKey) || 0;
    res.json({ estimatedPrice: price });
  } catch (error) {
    next(error);
  }
};
