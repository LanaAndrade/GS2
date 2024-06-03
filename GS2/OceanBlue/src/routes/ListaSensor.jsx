
import React, { useEffect, useState } from 'react';
import mqtt from 'mqtt';
import 'bootstrap/dist/css/bootstrap.min.css';

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

      <div className="dashboards-container">

        <div className="coluna1-container column">

          <section className='row1'>
            <iframe className="iframe300px" src="https://embed.tago.io?widget=66270a289817080010c14a5e&dashboard=662709639817080010c13ad6&token=e7e1328f-84c3-4508-8dc1-1e35a9b13e36" frameborder="0" allowfullscreen />
            <iframe className="iframe300px"  src="https://embed.tago.io?widget=66270a488109960010ab6656&dashboard=662709639817080010c13ad6&token=586bf7b5-0cef-4fe9-b3ed-394b6ffb5b7b" frameborder="0" allowfullscreen />
            <iframe className="iframe500px" src="https://embed.tago.io?widget=665bd35b6647d000094f8760&dashboard=662709639817080010c13ad6&token=96f4e165-840a-49bd-a1fc-b44471758f2b" frameborder="0" allowfullscreen />
          </section>

          <section className='row2'>
            <iframe width="200" height="300" src="https://embed.tago.io?widget=66270a378109960010ab651f&dashboard=662709639817080010c13ad6&token=643a2d82-f475-48d8-9433-9dca363735b5" frameborder="0" allowfullscreen />
            <div className='column-tempm-mm-container column'>
              <iframe width="400" height="150" src="https://embed.tago.io?widget=665bdb8183ecfe0009fb0b91&dashboard=662709639817080010c13ad6&token=48938981-8e14-403a-8a81-9ab055662cf5" frameborder="0" allowfullscreen />
              <div className='row'>
                <iframe width="200" height="150" src="https://embed.tago.io?widget=665bda9f83ecfe0009fafa0b&dashboard=662709639817080010c13ad6&token=e87c8136-35a6-4e66-b14d-7c8e0a464190" frameborder="0" allowfullscreen />
                <iframe width="200" height="150" src="https://embed.tago.io?widget=665bdb4f56e71d000afd15ed&dashboard=662709639817080010c13ad6&token=d2856c5a-df7d-4332-ac6c-5783e289f6d3" frameborder="0" allowfullscreen />
              </div>
            </div>
            <iframe width="500" height="300" src="https://embed.tago.io?widget=665bd6e9475fa00009e240ac&dashboard=662709639817080010c13ad6&token=f67970d0-6a52-4928-a6c7-5ebdb45d8ad4" frameborder="0" allowfullscreen />
          </section>
        </div>

        <aside className='column ' >
          <iframe width="400" height="200" src="https://embed.tago.io?widget=662709e1c1d6df00092b5344&dashboard=662709639817080010c13ad6&token=d7990602-ebfc-4695-9f14-fe62b6aba1e6" frameborder="0" allowfullscreen />
          <iframe width="400" height="200" src="https://embed.tago.io?widget=662709d540c6580009dccb57&dashboard=662709639817080010c13ad6&token=5109d9a3-662e-4319-98e3-28583fd575e4" frameborder="0" allowfullscreen />
          <iframe width="400" height="200" src="https://embed.tago.io?widget=665bd989475fa00009e27df4&dashboard=662709639817080010c13ad6&token=60979a78-0db3-42b0-8ea1-62dbd8e42d00" frameborder="0" allowfullscreen />
        </aside>
      </div>
    </div>
  );
};

export default ListaSensor
  