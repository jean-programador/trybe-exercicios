const validateAuthentication = (req, res, next) => {
  const requiredProperties = ['email', 'password', 'firstName', 'phone'];
  if (!requiredProperties.every((property) => property in req.body)) {
    return res.status(401).json({ message: 'Campos obrigatórios ausentes' });
  } else {
    next();
  }
};

const fs = require('fs').promises;

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (token && token.length === 16) {
    next();
  } else {
    res.status(401).json({ message: 'Token inválido!' });
  }
};

module.exports = {
  validateAuthentication,
  validateToken,
};
