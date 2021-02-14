import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
const serverUrl = 'http://localhost:5000';
const socket = io(serverUrl);

const App = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    socket.on('public msg from server', (message) => {
      socket.emit('hello server', 'This is message from client');
      setMessage(message);
    });
  }, [message]);
  console.log(message);
  return <h2>Example of socket.io connection</h2>;
};

export default App;
