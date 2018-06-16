import React, { Component } from 'react';
import MessageInput from './MessageInput'
import TextDisplay from '../components/TextDisplay'
import MessageList from './MessageList'

class SomethingSmall extends Component {
  constructor(props){
    super(props)
  }

  render () {
    var { basicText } = this.props

    return(
      <div>
        <MessageInput />
        <TextDisplay text={basicText}/>
        <MessageList />
      </div>
    )
  }
}

import { connect } from 'react-redux'
function mapStateToProps (state) {
  return {
    basicText: state.basic.tempTxt
  }
}

export default connect(mapStateToProps)(SomethingSmall)
