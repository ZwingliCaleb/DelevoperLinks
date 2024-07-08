// models/Profile.js
import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String },
  links: [
    {
      platform: String,
      url: String,
    },
  ],
});

export default mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);
