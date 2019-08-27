module.exports = (req, res, next) => {
    if (!req.session.currentUser) return res.status(401).json({ status: 401, message: "Unauthorized. Please login and try again"});
    next();
};