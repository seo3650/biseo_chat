import React from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
  
    return(
        <div className = 'OuterContainer'>
            <div className = 'Container'>
                <h1>Log In</h1>
                <Link to = {'/login/redirect'}>
                    <button className = "ssobutton" type = 'submit' >sso</button>
                </Link>
            </div>
        </div>
    )
}
export default Join;