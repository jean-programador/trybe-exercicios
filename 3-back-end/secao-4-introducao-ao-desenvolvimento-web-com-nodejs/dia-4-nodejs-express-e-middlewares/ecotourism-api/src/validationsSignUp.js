const validateAuthentication = (req, res, next) => {
  const requiredProperties = ['email', 'password', 'firstName', 'phone'];
  if (!requiredProperties.every((property) => property in req.body)) {
    return res.status(401).json({ message: 'Campos obrigatórios ausentes' });
  } else {
    next();
  }
};

module.exports = {
  validateAuthentication,
};
