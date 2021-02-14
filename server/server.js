import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('Connection established!');
  io.emit('public msg from server', 'Message from server');
  socket.on('hello server', (message) => {
    console.log(message);
  });
  socket.on('disconnect', () => {
    console.log('Socket disconnected!');
  });
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
