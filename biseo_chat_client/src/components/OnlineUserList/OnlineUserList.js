import React from 'react';
import './OnlineUserList.css';

const OnlineUserList = ({users}) => (
    <div className='otherContainer'>
        { users ? 
        (
          <div>
            <h1>Online users</h1>
            <div className="OnlineUsers">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="userName">
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
    </div>
);


export default OnlineUserList;