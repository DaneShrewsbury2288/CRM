import React, { Component } from "react";
import Sender from "./Sender"
import Receiver from "./Receiver"
import API from "../utils/API";


class Dialogue extends Component {

  state = {
    messages: [],
    user: this.props.user,
    partner: this.props.partner,
    content: null
  };

  componentDidMount() {
    console.log("user: " + this.state.user);
    console.log("partner: " + this.state.partner);
    this.loadMessages();
  }

  loadMessages = () => {
    const IDString = this.state.user + "&" + this.state.partner
    console.log(IDString)
    API.findMessages(IDString)
      .then(res =>
        this.setState({ messages: res.data }, () => {
          console.log(this.state.messages)
        }))
      .catch(err => console.log(err))
  }

  sendMessage = message => {
    API.createMessage(message)
      .then(res =>
        this.loadMessages()
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
              <Sender content={`${message.content}`} key={`${message.content}`} />
              :
              <Receiver content={`${message.content}`} key={`${message.content}`} />
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
