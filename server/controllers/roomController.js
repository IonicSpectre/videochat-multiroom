const { db } = require('../models/db');

async function getRooms(req, res) {
  try {
    const [rooms] = await db.execute('SELECT id, title, subtitle, image FROM rooms');
    const roomData = rooms.map(r => ({ ...r, users: 0 })); // TODO: count active users via socket
    res.json(roomData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal error' });
  }
}

async function getRoomById(req, res) {
  try {
    const [rows] = await db.execute('SELECT * FROM rooms WHERE id = ?', [req.params.id]);
    if (!rows.length) return res.status(404).json({ error: 'Room not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal error' });
  }
}

module.exports = { getRooms, getRoomById };
