const validateName = (req, res, next) => {
  const requiredProperties = ['nome'];
  const { name } = req.body;
  if (!requiredProperties.every((property) => property in req.body)) {
    res.sendStatus(400).json({ message: 'O campo name é obrigatório' });
  } else if (name.length < 4) {
    res
      .sendStatus(400)
      .json({ message: 'O campo name deve ter pelo menos 4 caracteres"' });
  } else {
    next();
  }
};
module.exports = {
  validateName,
};
