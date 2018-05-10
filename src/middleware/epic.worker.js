import 'rx.js'
import { createEpicMiddleware } from 'redux-observable'
import { epics } from 'duck'

const epicMiddleware: * = createEpicMiddleware(epics)

const dispatch = action => self.postMessage({ dispatch: action })
const next = action => self.postMessage({ next: action })

const epic = epicMiddleware({ dispatch })(next)

onmessage = function({ data: action }) {
	epic(action)
}
