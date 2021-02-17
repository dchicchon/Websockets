const server = require("http").createServer( (req,res) => {
    res.end('I am connected')
})
const io  = require('socket.io')(server)
// Create a server and have the response be i am conne
io.on('connection', (socket, req) => {
    socket.emit('messageFromServer', 'This is a message from the server')
    socket.on('messageFromClient', msg => {
        console.log(msg)
    })
})
console.log(io)
// create a websocket server
// const wss = new websocket.Server({server})

/// calling method 'on' which is available on websocket object
// wss.on('headers', (headers, req) => {
//     // logging the header  
//     console.log(headers)
// })

// event connectinos
// wss.on('connection',(ws, req) => {
//     ws.send('This is a message from the server, connection is established') 
//     // receive a message from the client on event 'message'
//     ws.on('message', msg => {
//         console.log(msg)
//     })
// })

// Go to port 8000
server.listen(8000)