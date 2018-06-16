import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeMessage, editMessage } from '../actions/index'
import Message from '../components/Message'

class MessageList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    var { messages, remove, edit } = this.props

    return (
      <div>
        <h1>Messages Added</h1>
        <ol>
          {messages.map((m, i) => (
          <Message 
            key={`msg-${i}`}
            message={m} 
            index={i} 
            removeFn={remove} 
            editFn={edit}/> 
          ))} 
        </ol>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
      messages: state.basic.messageList
  }
}

function mapDispatchToProps (dispatch) {
  return {
    remove(index){
      dispatch(removeMessage(index))
    },
    edit(index){
      dispatch(editMessage(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)

