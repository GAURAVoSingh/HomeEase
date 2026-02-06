import Review from '../models/Review.js';
import ProviderProfile from '../models/ProviderProfile.js';

export const createReview = async (req, res, next) => {
  try {
    const { bookingId, providerId, rating, comment } = req.body;
    const review = await Review.create({
      booking: bookingId,
      customer: req.user._id,
      provider: providerId,
      rating,
      comment,
    });
    const profile = await ProviderProfile.findOne({ user: providerId });
    if (profile) {
      const total = profile.ratingAverage * profile.ratingCount + rating;
      profile.ratingCount += 1;
      profile.ratingAverage = total / profile.ratingCount;
      await profile.save();
    }
    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};

export const listProviderReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ provider: req.params.id }).populate('customer', 'name');
    res.json(reviews);
  } catch (error) {
    next(error);
  }
};
