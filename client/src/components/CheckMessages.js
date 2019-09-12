import React, { Component } from "react";
import Sender from "./Sender"
import Receiver from "./Receiver"
import API from "../utils/API";

class CheckMessages extends Component {

  state = {
    messages: [],
    user: this.props.user,
    partner: this.props.partner,
  };

  componentDidMount() {
    this.loadMessages();
  }

  loadMessages = () => {
    const IDString = this.state.user + "&" + this.state.partner
    API.findMessages(IDString)
      .then(res =>
        this.setState({ messages: res.data }, () => {
        }))
      .catch(err => console.log(err))
  }

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
      </div>
    )
  }
};


export default CheckMessages;