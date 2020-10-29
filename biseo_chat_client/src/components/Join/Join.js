import React, { useState } from 'react';
import { Link } from 'react-router-dom';





const Join = () => {
    const[name, setName] = useState('');
    // const[room, setRoom] = useState('');

    return(
        <div className = 'joinOuterContainer'>
            <div className = 'joinInnerContainer'>
                <h1>Join</h1>
                <div><input placeholder = 'Name' className = 'joinInput'/></div>
                {/* <div><input placeholder = 'room' className = 'joinInput'/></div> */}
                {/* <Link onClick = { event => (!name||!room) ? event.preventDefault() : null } to = {'/chat?name='+name+'&room='+room}>
                    <button className = "button mt-20" type = 'submit'>Sign In</button>
                </Link> */}
                <Link onClick = { event => (!name) ? event.preventDefault() : null } to = {'/chat?name='+name}>
                    <button className = "button mt-20" type = 'submit'>Sign In</button>
                </Link>
            </div>
        </div>
    )
}
export default Join;