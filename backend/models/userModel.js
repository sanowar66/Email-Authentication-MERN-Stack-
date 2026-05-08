import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ 
  name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      reuired: true,
      unique: true,
    },
    password: {
      type: String,
      reuired: true,
    },
    verifyOtp: {
      type: String,
      default: '',
    },
    verifyOtpExpireAt: {
      type: String,
      default: 0,
    },
    isAcountVerified: {
      type: Boolean,
      default: false,
    },
    resetOtpExpireAt: {
      type: Number,
      default: 0,
    }},
     {
  timestamps: true,
}
);

const userModel=mongoose.models.user || mongoose.model('user',userSchema);

export default userModel;