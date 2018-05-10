import { receive, RECEIVE, START, done } from 'duck/prime'
import Worker from './seive.worker.js'
import { createEpicMiddleware } from 'redux-observable'

export default () => next => {
	var myWorker = new Worker()
	myWorker.onmessage = ({ data: action }) => next(action)

	return action => {
		const { type } = action
		switch (type) {
			case START:
				myWorker.postMessage(action)
				break
			default:
				next(action)
		}
	}
}
