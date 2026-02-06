import mongoose from 'mongoose';

const serviceCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, default: '' },
    icon: { type: String, default: '' },
  },
  { timestamps: true }
);

export default mongoose.model('ServiceCategory', serviceCategorySchema);
