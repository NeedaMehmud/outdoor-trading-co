const jwt = require('jsonwebtoken');
// import jwt

// required secret and expiration time
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  // allow token creation with authorization
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }
    // try to verify and return invalid if not able to verify
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  // assign tokens user information as well as secret and expiration for verification
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};