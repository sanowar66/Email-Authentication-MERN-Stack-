import userModel from "../models/userModel.js";
import auth from "../middleware/auth.js";
//get profile
export const getUserData = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User Not Found" });
    }
    res.json({
        success:true,
        userData:{
            name:user.name,
            isAcountVerified:user.isAcountVerified
        }
    });
    
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};