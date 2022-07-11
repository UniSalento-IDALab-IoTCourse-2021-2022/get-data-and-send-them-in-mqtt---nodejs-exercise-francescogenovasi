const mqtt=require('mqtt');
var client = mqtt.connect("mqtt://mqtt.eclipseprojects.io",{clientId:"mqttjs01"});

client.on("connect",function(){
    console.log("connected");
});

client.on("error",function(error){
    console.log("Can't connect"+error);
});

// Automatically update sensor value every 2 seconds
//we use a nested function (function inside another function)
setInterval(function() {
    const data = JSON.stringify({
        'sensor': 'ID123',
        'timestamp': 12345678,
        'temperature': Math.random()
    })

    client.publish("trial1/IoTLesson/raspberrypy1/temperature", data);
}, 2000);
