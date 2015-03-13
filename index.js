var express = require('express')
var mongoose = require('mongoose')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)

mongoose.connect('mongodb://admin:000000@ds039321.mongolab.com:39321/baza')

app.use(express.static(__dirname + '/public'))

app.get('/api/:id/:lat/:long', function(req, res){

})

var port = process.env.PORT || 1337;

server.listen(port)


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' })
  socket.on('my other event', function (data) {
    console.log(data)
  })
})
