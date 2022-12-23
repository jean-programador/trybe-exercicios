const validateName = (req, res, next) => {
  const requiredProperties = ['name'];
  const { name } = req.body;
  if (!requiredProperties.every((property) => property in req.body)) {
    return res.status(400).json({ message: 'O campo name é obrigatório' });
  } else if (name.length < 4) {
    return res
      .status(400)
      .json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  } else {
    next();
  }
};

const validatePrice = (req, res, next) => {
  const requiredProperties = ['price'];
  const { price } = req.body;
  if (!requiredProperties.every((property) => property in req.body)) {
    return res.status(400).json({ message: 'O campo price é obrigatório' });
  } else if (price < 0) {
    return res.status(400).json({
      message: 'O campo price deve ser um número maior ou igual a zero',
    });
  } else {
    next();
  }
};

const validateDescription = (req, res, next) => {
  const { description } = req.body;
  const keysDescription = description ? Object.keys(description) : [];
  if (!description) {
    return res.status(400).json({
      message: 'O campo description é obrigatório',
    });
  } else if (!keysDescription.includes('createdAt')) {
    return res.status(400).json({ message: 'O campo createdAt é obrigatório' });
  } else if (!keysDescription.includes('rating')) {
    return res.status(400).json({ message: 'O campo rating é obrigatório' });
  } else if (!keysDescription.includes('difficulty')) {
    return res
      .status(400)
      .json({ message: 'O campo difficulty é obrigatório' });
  } else {
    next();
  }
};

const validateFormatDate = (req, res, next) => {
  const { createdAt } = req.body.description;
  let day = createdAt.split('/')[0];
  let month = createdAt.split('/')[1];
  let year = createdAt.split('/')[2];
  let MyData = new Date(year, month - 1, day);
  if (
    MyData.getMonth() + 1 != month ||
    MyData.getDate() != day ||
    MyData.getFullYear() != year
  ) {
    return res.status(400).json({
      message: "O campo createdAt deve ter o formato 'dd/mm/aaaa'\"",
    });
  } else {
    next();
  }
};

module.exports = {
  validateName,
  validatePrice,
  validateDescription,
  validateFormatDate,
};
