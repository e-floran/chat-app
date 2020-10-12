import React from 'react';
import "./Contact.css";

function Contact(){
    return (
        <article className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/73.jpg" alt="Avatar"></img>
            <div>
                <h4 className="name">Marcus Freeman</h4>
                <div className="status">
                    <div className="status-online"></div>
                    <p className="status-text">Online</p>
                </div>
            </div>
        </article>
    )
}

export default Contact;