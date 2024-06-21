/*
! Websocket API
* This API enables real-time communication between a client and a server.
There are also web APIs for WebRTC (Web Real-time Communication), which provides real-time audio, video, and data communication.
? Think of them as a tunnel in which data can be sent in either direction.

*/

const socket = new WebSocket('ws://example.com/socket');
socket.onmessage = (event) => {
  console.log(event.data);
};
socket.send('Hello, Server!');