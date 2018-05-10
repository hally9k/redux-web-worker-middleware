import './rx.js'
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'component'
import { applyMiddleware, createStore } from 'redux'
import reducers, { epics } from 'duck'
import { composeWithDevTools } from 'redux-devtools-extension'
import { List } from 'immutable'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import workerMiddleware from 'middleware/worker'

const enhancer = composeWithDevTools(applyMiddleware(workerMiddleware, logger))

const store = createStore(reducers, enhancer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
