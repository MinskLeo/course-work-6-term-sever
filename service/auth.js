const jwt = require('jsonwebtoken');
const crypto = require('crypto-js');

class AuthService {
  constructor(UserSchema, config) {
    this.UserSchema = UserSchema;
    this.config = config;
  }

  cryptPassword (password) {
    return crypto.SHA256(password).toString();
  }

  createToken(login, password) {
    return jwt.sign({
      login, password
    }, this.config.SECRET);
  }

  decodeToken(token) {
    return jwt.verify(token, this.config.SECRET);
  }

  async checkToken(req) {
    const { token } = req.cookies;

    if (token) {
      let decodedData = {};

      try {
        decodedData = this.decodeToken(token);
      } catch (e) {
        return false;
      }

      const { login, password } = decodedData;
      const user = await this.UserSchema.findOne({
        login,
        password
      }, {
        password: 0
      });
        
      if (user) return user;
    }

    return false;
  }
}

module.exports = AuthService;