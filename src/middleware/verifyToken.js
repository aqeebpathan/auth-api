import jwt from "jsonwebtoken";
import AppResponse from "../utils/AppResponse.js";

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return AppResponse.error(res, "Unauthorized - no token provided");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return AppResponse.error(res, "Unauthorized - invalid token");
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    next(error);
  }
};

export default verifyToken;
