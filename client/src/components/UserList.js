import React from 'react';

export default function UserList({ socket }) {
  // Stub: aggiungere fetch utenti via socket o API se vuoi
  const users = [
    { name: 'guest_1', role: 'guest' },
    { name: 'mod_2', role: 'moderator' },
  ];

  return (
    <div className="user-list">
      <h4>Utenti online</h4>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            {user.name} <small>({user.role})</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
