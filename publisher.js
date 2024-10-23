const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
    console.log('Terhubung ke broker MQTT');

    const topic = 'test/topic';
    const message = 'Hello MQTT';

    client.publish(topic, message, () => {
        console.log(`Pesan "${message}" dikirim ke topik "${topic}"`);

        client.end();
    });
});