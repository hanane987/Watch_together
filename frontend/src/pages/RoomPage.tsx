import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

const RoomPage = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const socket = io('http://localhost:3000');

  useEffect(() => {
    socket.emit('joinRoom', id);

    socket.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [id]);

  const sendMessage = () => {
    socket.emit('sendMessage', message);
    setMessage('');
  };

  return (
    <div className="room-page">
      <h2>Room: {id}</h2>
      <div className="chat">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default RoomPage;
