import React, { Component } from 'react';
import TextInputControl from './TextInputControl'
class MessageList extends Component {
  constructor(props) {
    super(props);

  }

  messageList(){
    let i = 0
    return this.props.messages.map((msg)=>{
      i++
      return(
        <div key={`msg-${i}`}>
          {msg}
          <button onClick={this.props.removeMsg.bind(this)}>Remove</button>
        </div>
      )
    })
  }

  render() {
    return(
      <div>
        <h1>Messages Added</h1>
        {this.messageList()}
      </div>
    )
  }
}

import { connect } from 'react-redux'
import {
  removeMessage
} from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  console.log(state.basic.messageList)
  return {
      messages: state.basic.messageList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeMsg(){
      console.log(this)
      dispatch(removeMessage(this))
    }
  }
}

MessageList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList)

export default MessageList
