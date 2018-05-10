import { List } from 'immutable'

const REQUEST = 'REQUEST_PRIME'
const RECEIVE = 'RECEIVE_PRIME'

export const request = () => ({ type: REQUEST })
const receive = payload => ({ type: RECEIVE, payload })

const INITIAL_STATE = List()

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action

	switch (type) {
		case RECEIVE:
			return state.push(payload)

		default:
			return state
	}
}
