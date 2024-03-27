const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  if (['/', '/login']) {
    return next();
  }

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(403).send({ msg: 'Acceso denegado.'});
  }

  try {
    jwt.verify(authorization.split(' ')[1], 'SECRET');
  } catch (error) {
    console.log(error);
    return res.status(403).send({ msg: "Acceso denegado." });
  }
  
  return next();
};

module.exports = auth;
