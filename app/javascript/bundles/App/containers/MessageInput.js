import React, { Component } from 'react';

/**
 *
 * MessageInput
 *
 * @func
 * @param {Object} props
 * @param {String} props.messageText
 * @param {Callback} props.postMessage
 * @param {Callback} props.setMessageText
 * @return {ReactComponent}
 *
 * */

class MessageInput extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    var { messageText, postMessage, setMessageText  } = this.props
    var input
    return(
      <div>
        <input ref={node => {input = node} } onChange={() => setMessageText(input.value)} value={messageText} />
        <button type="button" onClick={() => !input.value.trim() ? false : postMessage(input.value)} >
          Add
        </button>
      </div>
    )
  }
}

import { connect } from 'react-redux'
import { setTempMessage, addMessage } from '../actions/index'


function mapStateToProps (state) {
  return {
    messageText: state.basic.tempTxt
  }
}

function mapDispatchToProps (dispatch) {
  return {
    postMessage(){
      dispatch(addMessage())
    },
    setMessageText(txt){
      dispatch(setTempMessage(txt))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput)

