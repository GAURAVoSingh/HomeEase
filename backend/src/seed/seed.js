import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/User.js';
import ProviderProfile from '../models/ProviderProfile.js';
import ServiceCategory from '../models/ServiceCategory.js';

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/homeease');
    await User.deleteMany();
    await ProviderProfile.deleteMany();
    await ServiceCategory.deleteMany();

    const categories = await ServiceCategory.insertMany([
      { name: 'Plumbing', description: 'Leaks, fittings, pipes' },
      { name: 'Electrical', description: 'Wiring, lighting, repairs' },
      { name: 'Cleaning', description: 'Home and office cleaning' },
      { name: 'Carpentry', description: 'Furniture, fixtures, repairs' },
    ]);

    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@homeease.com',
      password: 'password123',
      role: 'admin',
    });

    const provider = await User.create({
      name: 'Priya Patel',
      email: 'provider@homeease.com',
      password: 'password123',
      role: 'provider',
      location: 'Austin',
    });

    await ProviderProfile.create({
      user: provider._id,
      skills: ['Pipe repair', 'Leak detection'],
      serviceCategories: [categories[0]._id],
      pricing: { 'Pipe repair': 120 },
      verificationStatus: 'verified',
    });

    await User.create({
      name: 'Customer One',
      email: 'customer@homeease.com',
      password: 'password123',
      role: 'customer',
      location: 'Austin',
    });

    console.log('Seed data created');
    console.log('Admin login:', admin.email, 'password123');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seed();
