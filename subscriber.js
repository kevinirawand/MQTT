const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
    console.log('Terhubung ke broker MQTT');

    const topic = 'test/topic';
    client.subscribe(topic, (err) => {
        if (!err) {
            console.log(`Berlangganan ke topik "${topic}"`);
        }
    });
});

client.on('message', (topic, message) => {
    console.log(`Pesan diterima dari topik "${topic}": ${message.toString()}`);
});