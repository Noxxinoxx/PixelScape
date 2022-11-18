var http = require("http")
var express = require("express")
var app = express()
var {Server} = require("socket.io")
var server = http.createServer(app)
var io = new Server(server)


app.use(express.static('public'))


app.get("/", (req, res ) => {
    res.sendFile(__dirname + "/index.html")
})


io.on("connection", (socket) => {
    console.log("user connected")
})



server.listen(3000)