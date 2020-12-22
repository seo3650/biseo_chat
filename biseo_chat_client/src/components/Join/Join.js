import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';
import axios from '../../utils/axios';





const Join = () => {
    const[name, setName] = useState('');
    const[room, setRoom] = useState('');
    const MainRoom = 'CHATROOM';


    // useEffect(() => {
    //     axios.get('/auth/check');
    // }, []);

    return(
        <div className = 'OuterContainer'>
            <div className = 'Container'>
                <h1>Log In</h1>
                <div><input placeholder = "Name" className = "joinInput" type = "text" onChange = { (event) => setName(event.target.value) }/></div>
                {/* <Link onClick = { event => (!name) ? event.preventDefault() : null } to = {'/chat?name='+name+'&room='+MainRoom}>
                    <button className = "button" type = 'submit'>Sign In</button>
                </Link> */}
                <Link to = {'/login/redirect'}>
                    <button className = "ssobutton" type = 'submit' >sso</button>
                </Link>
            </div>
        </div>
    )
}
export default Join;