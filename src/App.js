import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Router from 'Router'
import Reducer from 'api/Reducers'

const store = createStore(Reducer, applyMiddleware(thunk))

function App () {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
