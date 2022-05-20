const express = require('express');
const app = express();

const server = app.listen(8000, () => {
    console.log('Server running at port 8000')
});

const io = require('socket.io')(server, {cors: true})

io.on("connection", socket => {
    console.log("Handshake");
    socket.on('disconnect', () => {
        console.log('user left', socket.id)
        socket.on('leave', data => console.log(data))
    })
    socket.on('chat message', (data) => {
        console.log(data)
        socket.emit('chat message', data)
    })
})