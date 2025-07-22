import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export default function RoomList({ onEnter }) {
  const [rooms, setRooms] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE || ''}/rooms`)
      .then(res => setRooms(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>{t('rooms')}</h2>
      <ul>
        {rooms.map(r => (
          <li key={r.id}>
            <img src={r.image} alt={r.title} width="50" />
            <strong>{r.title}</strong> ({r.users})
            <button onClick={() => onEnter(r.id)}>
              {t('enter_room')}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
