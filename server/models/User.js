class User {
  constructor(id, username, role = 'guest') {
    this.id = id;
    this.username = username;
    this.role = role;
  }
}

module.exports = User;
