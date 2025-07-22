import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import UserList from './UserList';
import VideoStream from './VideoStream';

const socket = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000');

export default function ChatRoom() {
  const { id } = useParams(); // Room ID from route
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username] = useState(localStorage.getItem('username') || 'guest');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.emit('joinRoom', { roomId: id, username });

    socket.on('newMessage', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, [id]);

  const handleSend = () => {
    if (!message.trim()) return;
    socket.emit('chatMessage', { roomId: id, username, message });
    setMessage('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-room-container">
      <UserList socket={socket} />
      <div className="chat-area">
        <div className="messages">
          {messages.map((msg, i) => (
            <div key={i}>
              <strong>{msg.username}:</strong> {msg.message}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="input-area">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>Invia</button>
        </div>
      </div>
      <VideoStream socket={socket} roomId={id} />
    </div>
  );
}
