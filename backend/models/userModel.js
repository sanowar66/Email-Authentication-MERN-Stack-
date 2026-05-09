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
      type: String,    //should be the Number 
      default: 0,
    },
    isAcountVerified: {
      type: Boolean,
      default: false,
    },
    resetOtp: {
      type: String,
      default: '',
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