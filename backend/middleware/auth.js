import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized" });
  }
  try {
    const tokendecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokendecode.id) {
      req.userId = tokendecode.id;
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized" });
    }
    next();
  } catch (error) {
    console.log(error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

export default auth;
