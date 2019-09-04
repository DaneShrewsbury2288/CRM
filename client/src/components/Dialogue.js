import React, { Component } from "react";
import Sender from "./Sender"
import Receiver from "./Receiver"
import API from "../utils/API";
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3002',  {transports: ['websocket']});

class Dialogue extends Component {

  state = {
    messages: [],
    user: this.props.user,
    partner: this.props.partner,
    content: ''
  };

  componentDidMount() {
    this.loadMessages();
    socket.on('message', data => (
      this.loadMessages()
    ));
  }

  loadMessages = () => {
    const IDString = this.state.user + "&" + this.state.partner
    API.findMessages(IDString)
      .then(res =>
        this.setState({ messages: res.data }, () => {
        }))
      .catch(err => console.log(err))
  }

  sendMessage = message => {
    API.createMessage(message)
      .then(res =>
        socket.emit('new message', message)
      )
      .catch(err => console.log(err))
  }

  onChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const newMessage = {
      content: this.state.content,
      sender: this.state.user,
      receiver: this.state.partner
    };

    this.sendMessage(newMessage);
    this.setState({content: ''})
  };

  render() {
    return (
      <div>
        {
          this.state.messages.map(message => (
            this.state.user === message.sender ?
              <Sender content={`${message.content}`} key={`${message._id}`} />
              :
              <Receiver content={`${message.content}`} key={`${message._id}`} />
          ))
        }
        <form noValidate onSubmit={this.onSubmit}>
          <div className="input-field col s12">
            <input
              onChange={this.onChange}
              value={this.state.content}
              id="content"
              type="text"
            />
          </div>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Send Message
</button>
          </div>
        </form>
      </div>
    )
  }
};


export default Dialogue;
