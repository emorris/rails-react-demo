import React from 'react';
import { connect } from 'react-redux'
import { removeMessage, editMessage } from '../actions/index'
import MessageList from '../components/MessageList'

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

