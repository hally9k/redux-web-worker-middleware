import { Map } from 'immutable'

const DONE = 'DONE'
const RECEIVE = 'RECEIVE'
export const START = 'START'

export const done = () => ({ type: DONE })
export const receive = payload => ({ type: RECEIVE, payload })
export const start = payload => ({ type: START, payload })

const INITIAL_STATE = Map({
	number: null,
	done: false,
	woking: false
})
export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action

	switch (type) {
		case RECEIVE:
			return state.set('number', payload).set('working', true)

		case DONE:
			return state.set('done', true).set('working', false)

		default:
			return state
	}
}
