import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://broker.hivemq.com')

client.on('connect', () => {
  client.subscribe('numbers')
  console.log('Connected to broker');
})

client.on('message', (topic, message) => {
  console.log('Message received:' + message);
})