const http = require("http");
const websocket = require("ws")
// Create a server and have the response be i am connected
const server = http.createServer((req,res) => {
    res.end("I am connected")
})

// create a websocket server
const wss = new websocket.Server({server})

/// calling method 'on' which is available on websocket object
wss.on('headers', (headers, req) => {
    // logging the header  
    console.log(headers)
})

// event connectinos
wss.on('connection',(ws, req) => {
    ws.send('This is a message from the server, connection is established') 
    // receive a message from the client on event 'message'
    ws.on('message', msg => {
        console.log(msg)
    })
})

// Go to port 8000
server.listen(8000)