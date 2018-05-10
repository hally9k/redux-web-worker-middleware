import { receive, RECEIVE, START, done } from 'duck/prime'
import Worker from './epic.worker.js'
import { createEpicMiddleware } from 'redux-observable'

export default ({ dispatch }) => next => {
	var myWorker = new Worker()
	myWorker.onmessage = ({ data: { next: nextAction, dispatch: dispatchAction } }) => {
		if (nextAction) {
			next(nextAction)
		}
		if (dispatchAction) {
			dispatch(dispatchAction)
		}
	}

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
