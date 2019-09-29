import React, { Component } from "react";
import Sender from "./Sender"
import Receiver from "./Receiver"
import API from "../utils/API";
import openSocket from 'socket.io-client';
import Button from '@material-ui/core/Button';

const socket = openSocket();

class Dialogue extends Component {

  state = {
    messages: [],
    user: this.props.user,
    partner: this.props.partner,
    content: ''
  };

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.loadMessages();
    socket.on('message', data => (
      this.loadMessages()
    ));
  }

  componentWillUnmount() {
    this._isMounted = false;
    socket.removeAllListeners('message');
 }

  loadMessages = () => {
    const IDString = this.state.user + "&" + this.state.partner
    API.findMessages(IDString)
      .then(res =>
        this.setState({ messages: res.data }, () => {
          this.scrollToBottom();
          this.setAsRead();
        }))
      .catch(err => console.log(err))
  }

  setAsRead = () => {
    const IDString = this.state.user + "&" + this.state.partner
    API.markAsRead(IDString)
      .then(res => {
        socket.emit('messages checked')
      })
      .catch(err => console.log(err))
  }

  sendMessage = message => {
    API.createMessage(message)
      .then(res =>{
        socket.emit('new message', message)
      })
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
    this.setState({ content: '' })
  };
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    const styles = {
      content: {
        marginTop: '100px',
        marginBottom: '48px'
      },
      formHolder: {
        zIndex: 40,
        width: '100%',
        position: 'fixed',
        bottom: '20px',
        display: 'flex',
      },
      form: {
        zIndex: 40,
        marginLeft: '20px'
      },
      message: {
        paddingLeft: '.75rem',
        paddingRight: '.75rem',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
        borderRadius: '.5rem',
        backgroundColor: '#a2a2a2',
        border: '0 solid #f1f1f1'
      }
    }
    return (
      <div style={styles.content}>
        {
          this.state.messages.map(message => (
            this.state.user === message.sender ?
              <Sender content={`${message.content}`} key={`${message._id}`} />
              :
              <Receiver content={`${message.content}`} key={`${message._id}`} />
          ))
        }
        <div style={{ float: "left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}>
        </div>
        <div style={styles.formHolder}>
          <form noValidate style={styles.form} onSubmit={this.onSubmit}>
            <input
              style={styles.message}
              onChange={this.onChange}
              value={this.state.content}
              placeholder="message..."
              id="content"
              type="text"
              autoComplete="off"
            />
            <Button
              variant="contained"
              style={{backgroundColor: '#313131'}}
              color="primary"
              type="submit"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    )
  }
};


export default Dialogue;
