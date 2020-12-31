import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import OnlineUserList from '../OnlineUserList/OnlineUserList';

import './Chat.css';
import { getToken } from '../../utils/auth';

let socket;

const Chat = ( { location } ) => {
    const [name, setName] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState('');
    const ENDPOINT = 'http://moby.sparcs.org:44431';

    useEffect(() => {
        socket = io.connect(ENDPOINT, {
            query: `token=${getToken()}`
        });

        socket.on('name', (name) => {
            setName(name);
        });
        
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message])
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });
    }, [])

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
};

    return (
        <div className = 'outerContainer'>
            <div className = 'container'>
                <Messages messages = {messages} name = {name}/>
                <Input message = {message} setMessage = {setMessage} sendMessage = {sendMessage} />
            </div>
            <OnlineUserList users={users}/>
        </div>
    );
}

export default Chat;