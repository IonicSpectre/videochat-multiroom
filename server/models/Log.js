class Log {
  constructor(type, user, message, time = new Date()) {
    this.type = type;
    this.user = user;
    this.message = message;
    this.time = time;
  }
}

module.exports = Log;
