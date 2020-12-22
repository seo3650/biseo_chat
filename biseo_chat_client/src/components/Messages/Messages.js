import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../Message/Message';

import './Messages.css';

const Messages = ({ messages, name , time}) => {
    const messagesArray = Array.from(messages)
    return(
        <ScrollToBottom className = "messages">
            {messagesArray.map((message, i) => 
                <div key={i}><Message message = {message} name = {name} time = {time}/> </div>)}
        </ScrollToBottom>
    );
};

export default Messages;