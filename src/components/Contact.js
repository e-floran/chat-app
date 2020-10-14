import React from 'react';
import PropTypes from 'prop-types';
import "./Contact.css";

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            online : this.props.online
        };
    }
    render(){
        return (
            <article className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name}></img>
                <div>
                    <h4 className="name">{this.props.name}</h4>
                    <div className="status" onClick={event => {
                        const contrary = !(this.state.online);
                        this.setState({online : contrary});
                        }}
                    >
                        <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                        <p className="status-text">{this.state.online ? 'Online' : 'Offline'}</p>
                    </div>
                </div>
            </article>
        )
    }
}
Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;