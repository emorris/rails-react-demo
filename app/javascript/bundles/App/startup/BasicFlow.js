import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reducers from '../reducers/index';
import SomethingSmall from '../containers/SomethingSmall'

const store =  createStore(
  combineReducers({
    ...reducers
  }),
  compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
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
