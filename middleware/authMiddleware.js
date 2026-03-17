const authMiddleware = (req, res, next) => {

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized - No Token" });
  }

  if (token !== "validtoken") {
    return res.status(401).json({ message: "Invalid Token" });
  }

  next();
};

export default authMiddleware;