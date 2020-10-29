import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from '../InfoBar/InfoBar'

let socket;

const Chat = ( { location } ) => {
    const [name, setName] = useState('');
    // const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState('');
    const ENDPOINT = 'http://ssal.sparcs.org:44131';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        console.log("name: " + name); // TODO: DELETE IT
        // console.log("room: " + room); // TODO: DELETE IT
        socket = io.connect(ENDPOINT);
        
        setName(name);
        // setRoom(room);

        socket.emit('join', { name: name }, (error) => {
            if (error) {
                alert(error);
            }
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        });
    }, [messages])

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    console.log(message, messages); // TODO: DEBUG

    return (
        <div className = 'outerContainer'>
            <div className = 'container'>
                <InfoBar />
                a
            </div>
        </div>
    );
}

export default Chat;