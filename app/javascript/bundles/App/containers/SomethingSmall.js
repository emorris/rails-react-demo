import React, { Component } from 'react';
import MessageInput from './MessageInput'
import TextDisplay from '../components/TextDisplay'
import Messages from './Messages'

function SomethingSmall({ basicText }) {
  return(
    <div>
      <MessageInput />
      <TextDisplay text={basicText}/>
      <Messages />
    </div>
  )
}

import { connect } from 'react-redux'
function mapStateToProps (state) {
  return {
    basicText: state.basic.tempTxt
  }
}

export default connect(mapStateToProps)(SomethingSmall)
