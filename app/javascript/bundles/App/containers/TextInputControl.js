import React, { Component } from 'react';
class TextInputControl extends Component {
  constructor(props) {
    super(props);
  }

  sendMessage(e){
    this.props.postMessage()
  }

  handleChange(e){
    this.props.setMessageInputText(e.target.value)
  }

  render() {
    return(
      <div>
        <input value={this.props.messageText} onChange={this.handleChange.bind(this)} />
        <button onClick={this.sendMessage.bind(this)} >
          Add
        </button>
      </div>
    )
  }
}

import { connect } from 'react-redux'
import {
  setTempMessage,
  addMessage
} from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
    messageText: state.basic.tempTxt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage(){
      dispatch(addMessage())
    },
    setMessageInputText(txt){
      dispatch(setTempMessage(txt))
    }
  }
}

TextInputControl = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInputControl)

export default TextInputControl
