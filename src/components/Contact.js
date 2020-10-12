import React from 'react';
import PropTypes from 'prop-types';
import "./Contact.css";

function Contact(props){
    return (
        <article className="Contact">
            <img className="avatar" src={props.avatar} alt={props.name}></img>
            <div>
                <h4 className="name">{props.name}</h4>
                <div className="status">
                    <div className={props.online ? 'status-online' : 'status-offline'}></div>
                    <p className="status-text">{props.online ? 'Online' : 'Offline'}</p>
                </div>
            </div>
        </article>
    )
}
Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;