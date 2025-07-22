const jwt = require('jsonwebtoken');
const { db } = require('../models/db');

async function login(req, res) {
  const { username, password } = req.body;
  // Esempio semplificato: Founder solo via env
  if (username === process.env.FOUNDER_USERNAME &&
      password === process.env.FOUNDER_PASSWORD) {
    const token = jwt.sign({ role: 'founder', username }, process.env.JWT_SECRET);
    return res.json({ token });
  }
  // TODO: login utenti registrati
  return res.status(401).json({ error: 'Invalid credentials' });
}

function guestAccess(req, res) {
  const token = jwt.sign({ role: 'guest', username: `guest_${Date.now()}` }, process.env.JWT_SECRET);
  res.json({ token });
}

module.exports = { login, guestAccess };
