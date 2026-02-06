import User from '../models/User.js';
import ProviderProfile from '../models/ProviderProfile.js';

export const updateProfile = async (req, res, next) => {
  try {
    const updates = { name: req.body.name, phone: req.body.phone, location: req.body.location };
    const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true }).select('-password');
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const listProviders = async (req, res, next) => {
  try {
    const { service, location } = req.query;
    const query = {};
    if (location) query.location = location;
    const providers = await User.find({ role: 'provider', ...query }).select('-password');
    const profiles = await ProviderProfile.find({ user: { $in: providers.map((p) => p._id) } })
      .populate('serviceCategories', 'name');

    const result = providers.map((provider) => {
      const profile = profiles.find((p) => p.user.toString() === provider._id.toString());
      const matchesService = service
        ? profile?.skills?.some((skill) => skill.toLowerCase().includes(service.toLowerCase()))
        : true;
      return matchesService
        ? {
            ...provider.toObject(),
            profile,
          }
        : null;
    }).filter(Boolean);

    res.json(result);
  } catch (error) {
    next(error);
  }
};
