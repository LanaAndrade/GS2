
import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt';

const ListaSensor = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt');

    client.on('connect', () => {
      console.log('Connected to broker');
      client.subscribe('test/topic', (err) => {
        if (!err) {
          console.log('Subscribed to topic');
        }
      });
    });

    client.on('message', (topic, message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { topic, message: message.toString() },
      ]);
    });

    return () => {
      client.end();
    };
  }, []);

  return (
    <div>
      <h1>MQTT Messages</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.topic}:</strong> {msg.message}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ListaSensor
  