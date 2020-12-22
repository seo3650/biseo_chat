import React from 'react';

import ReactEmoji from 'react-emoji';

import './Message.css';
import defaultUserProfile from '../../icons/defaultUserProfile.png'

const Message = ({ message: { user, text, time }, name }) => {
    let isSentByUser = false;

    const trimmedName = typeof name !== 'string' ? null : name.trim().toLowerCase();
    if (user === trimmedName) {
        isSentByUser = true;
    }

    return (
        isSentByUser
        ? (
            <div className = "messageContainer myMessages">
                <img className="profile" src={defaultUserProfile} alt="default user profile" />
                <div className = "nameAndMessageBox alignEnd">
                    <p className = 'name'>{ trimmedName }</p>
                    <p className = "messageText myBackground colorWhite">{ ReactEmoji.emojify(text) }</p>
                </div>
                <p className = "timeText">{time}</p>
            </div>
        )
        : (
            <div className = 'messageContainer otherMessages'>
                <img className="profile" src={defaultUserProfile} alt="default user profile" />
                <div className = "nameAndMessageBox alignStart">
                    <p className ='name'>{user}</p>
                    <p className = "messageText otherBackground colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className = "timeText">{time}</p>
            </div>
        )
    );
}

export default Message;