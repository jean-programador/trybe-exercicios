const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'O campo name é obrigatório' });
  }
  if (name.length < 4) {
    return res
      .status(400)
      .json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  }
  next();
};

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (!price) {
    return res.status(400).json({ message: 'O campo price é obrigatório' });
  }
  if (price < 0 || typeof price !== 'number') {
    return res.status(400).json({
      message: 'O campo price deve ser um número maior ou igual a zero',
    });
  }
  next();
};

const validateDescription = (req, res, next) => {
  const { description } = req.body;
  const keysDescription = description ? Object.keys(description) : [];
  if (!description) {
    return res.status(400).json({
      message: 'O campo description é obrigatório',
    });
  }
  if (!keysDescription.includes('createdAt')) {
    return res.status(400).json({ message: 'O campo createdAt é obrigatório' });
  }
  if (!keysDescription.includes('rating')) {
    return res.status(400).json({ message: 'O campo rating é obrigatório' });
  }
  if (!keysDescription.includes('difficulty')) {
    return res
      .status(400)
      .json({ message: 'O campo difficulty é obrigatório' });
  }
  next();
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
  }
  next();
};

const validateRating = (req, res, next) => {
  const { rating } = req.body.description;
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return res.status(400).json({
      message: 'O campo rating deve ser um número inteiro entre 1 e 5',
    });
  }
  next();
};

const validateDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;
  const valuesValids = ['Fácil', 'Médio', 'Difícil'];
  if (!valuesValids.includes(difficulty)) {
    return res.status(400).json({
      message: "O campo difficulty deve ser 'Fácil', 'Médio' ou 'Difícil'\"",
    });
  }
  next();
};

module.exports = {
  validateName,
  validatePrice,
  validateDescription,
  validateFormatDate,
  validateRating,
  validateDifficulty,
};
