import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk';
import './index.scss'

import App from './Containers/App';
import reducer from './reducers/index'

const store = createStore(
  reducer, composeWithDevTools(
    applyMiddleware(thunk)
  ))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'))