function initSockets(io) {
  io.on('connection', (socket) => {
    console.log('🔌 User connected:', socket.id);

    socket.on('joinRoom', ({ roomId, username }) => {
      socket.join(roomId);
      socket.to(roomId).emit('userJoined', username);
    });

    socket.on('chatMessage', ({ roomId, username, message }) => {
      io.to(roomId).emit('newMessage', { username, message });
    });

    socket.on('disconnect', () => {
      console.log('❌ User disconnected:', socket.id);
    });
  });
}

module.exports = { initSockets };
