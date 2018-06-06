import React, { Component } from 'react';
class SomethingSmall extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <h1> Hello</h1>
    )
  }
}

import { connect } from 'react-redux'
import {

} from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

SomethingSmall = connect(
  mapStateToProps,
  mapDispatchToProps
)(SomethingSmall)

export default SomethingSmall
