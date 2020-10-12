import React from 'react';
import "./Contact.css";

let IsOnline = true;
const StatusOnline = () =>{
    return IsOnline === true ? "status-online" : "status-offline" ;
}
const StatusText = () =>{
    return IsOnline === true ? "Online" : "Offline" ;
}

function Contact(){
    return (
        <article className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/73.jpg" alt="Avatar"></img>
            <div>
                <h4 className="name">Marcus Freeman</h4>
                <div className="status">
                    <div className={StatusOnline}></div>
                    <p className="status-text">{StatusText}</p>
                </div>
            </div>
        </article>
    )
}

export default Contact;