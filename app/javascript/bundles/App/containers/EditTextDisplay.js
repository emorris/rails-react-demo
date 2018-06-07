import React, { Component } from 'react';
import TextInputControl from './TextInputControl'
class EditTextDisplay extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <h1>See the Magic</h1>
        <div>{this.props.txt}</div>
      </div>
    )
  }
}

import { connect } from 'react-redux'
import {

} from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
      txt: state.basic.tempTxt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

EditTextDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTextDisplay)

export default EditTextDisplay
