import React from 'react';
import './voterhomepage.css'

const Voterhomepage = () => {
    return (
        <div>
            <div className="sidebar">
                <ul>
                    <li><a href="/mainlogin">Register</a></li>
                    <li><a href="/vote">Vote</a></li>
                    <li><a href="/liveres">Result</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Voterhomepage;
