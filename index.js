alert("did it work?")

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://24.10.232.182:1883')
//var client = mqtt.connect({port = 1883, host = '24.10.232.182'})
 alert("What is happening?");
client.on('connect', function () {
  client.subscribe('baja/sensor/#', function (err) {
    if (!err) {
      client.publish('baja/sensor/#', 'Hello mqtt')
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})