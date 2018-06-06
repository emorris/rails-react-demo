import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from '../reducers/index';
import SomethingSmall from '../containers/SomethingSmall'

const store =  createStore(
  combineReducers({
    ...reducers
  }),
  applyMiddleware(thunkMiddleware)
)


export default class BasicFlow extends Component {
  render() {
    return (
      <Provider store={store}>
        <SomethingSmall />
      </Provider>
    );
  }
}
