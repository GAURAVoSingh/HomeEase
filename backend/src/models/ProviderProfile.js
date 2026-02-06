import mongoose from 'mongoose';

const providerProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bio: { type: String, default: '' },
    skills: [{ type: String, required: true }],
    serviceCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ServiceCategory' }],
    pricing: {
      type: Map,
      of: Number,
      default: {},
    },
    availability: [
      {
        day: { type: String },
        slots: [{ type: String }],
      },
    ],
    verificationStatus: {
      type: String,
      enum: ['pending', 'verified', 'rejected'],
      default: 'pending',
    },
    verificationDocumentUrl: { type: String, default: '' },
    ratingAverage: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('ProviderProfile', providerProfileSchema);
