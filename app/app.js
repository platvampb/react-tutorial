import React from 'react'
import { render } from 'react-dom'
import AppBody from './AppBody'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducers from './appReducers'

let store = createStore(appReducers)

render(
  <Provider store={store}>
    <AppBody/>
  </Provider>,
  document.getElementById("app")
)
