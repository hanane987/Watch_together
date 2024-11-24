import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Notifications = () => {
  const [notifications, setNotifications] = useState<string[]>([]);
  const socket = io('http://localhost:3000');

  useEffect(() => {
    socket.on('notification', (msg) => {
      setNotifications((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
