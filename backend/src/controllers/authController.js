import User from '../models/User.js';
import ProviderProfile from '../models/ProviderProfile.js';
import generateToken from '../utils/generateToken.js';

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role, phone, location, skills, serviceCategories, pricing, verificationDocumentUrl } = req.body;
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    const user = await User.create({ name, email, password, role, phone, location });

    if (role === 'provider') {
      await ProviderProfile.create({
        user: user._id,
        skills: skills || [],
        serviceCategories: serviceCategories || [],
        pricing: pricing || {},
        verificationDocumentUrl: verificationDocumentUrl || '',
      });
    }

    return res.status(201).json({
      token: generateToken(user._id, user.role),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    if (user.isBlocked) {
      return res.status(403).json({ message: 'Account blocked' });
    }
    return res.json({
      token: generateToken(user._id, user.role),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return next(error);
  }
};

export const getMe = async (req, res) => {
  res.json(req.user);
};
