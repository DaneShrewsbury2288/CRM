import React, { Component } from "react";
import Sender from "./Sender"
import Receiver from "./Receiver"
import API from "../utils/API";

class CheckMessages extends Component {

  state = {
    messages: [],
    user1: this.props.user1,
    user2: this.props.user2,
  };

  componentDidMount() {
    this.loadMessages();
  }

  loadMessages = () => {
    const IDString = this.state.user1 + "&" + this.state.user2
    API.findMessages(IDString)
      .then(res =>
        this.setState({ messages: res.data }, () => {
        }))
      .catch(err => console.log(err))
  }

  render() {
    const styles = {
      end: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '.75rem',
        marginTop: '.5rem'
      },
      start: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: '.75rem',
        marginTop: '.5rem'
      }
    }
    return (
      <div>
        {
          this.state.messages.map(message => (
            this.state.user1 === message.sender ?
              <div key={`${message._id}`} >
                <div style={styles.end}>
                  {this.props.user1Name}:
                </div>
                <Sender content={`${message.content}`} />
              </div>
              :
              <div key={`${message._id}`}>
                <div style={styles.start}>
                  {this.props.user2Name}:
                </div>
                <Receiver content={`${message.content}`} />
              </div>
          ))
        }
      </div>
    )
  }
};


export default CheckMessages;