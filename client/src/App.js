import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomList from './components/RoomList';
import ChatRoom from './components/ChatRoom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoomList />} />
        <Route path="/room/:id" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}
