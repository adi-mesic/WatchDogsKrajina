var express = require('express')
var mongoose = require('mongoose')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)

var MObject = require('./models/mobject')

mongoose.connect('mongodb://admin:000000@ds039321.mongolab.com:39321/baza')

app.use(express.static(__dirname + '/public'))

app.get('/api/:id/:lat/:long', function(req, res){
  MObject.where({_id: req.params.id }).findOne(function(err, objekat){
    objekat.lat = req.params.lat
    objekat.long = req.params.long
    objekat.save()
  })
  res.send(200)
})

app.get('/kreiraj/:name/:label', function(req, res){
  var objekat = new MObject()
  objekat.name = req.params.name
  objekat.label = req.params.label
  objekat.save()
  res.send(objekat)
})

var port = process.env.PORT || 1337;

server.listen(port)


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' })
  
})
