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
		case START:
			return state.set('working', true)

		case RECEIVE:
			return state.set('number', payload)

		case DONE:
			return state.set('done', true).set('working', false)

		default:
			return state
	}
}

var eratosthenes = function(n) {
	// Eratosthenes algorithm to find all primes under n
	var array = [],
		upperLimit = Math.sqrt(n),
		output = []

	// Make an array from 2 to (n - 1)
	for (var i = 0; i < n; i++) {
		array.push(true)
	}

	// Remove multiples of primes starting from 2, 3, 5,...
	for (var i = 2; i <= upperLimit; i++) {
		if (array[i]) {
			for (var j = i * i; j < n; j += i) {
				array[j] = false
			}
		}
	}

	// All array[i] set to true are primes
	for (var i = 2; i < n; i++) {
		if (array[i]) {
			output.push(i)
		}
	}

	return output
}

const primeEpic = $action =>
	$action.ofType(START).mergeMap(() => {
		const n = 100000000
		// Eratosthenes algorithm to find all primes under n
		var array = [],
			upperLimit = Math.sqrt(n),
			output = []

		// Make an array from 2 to (n - 1)
		for (var i = 0; i < n; i++) {
			array.push(true)
		}

		// Remove multiples of primes starting from 2, 3, 5,...
		for (var i = 2; i <= upperLimit; i++) {
			if (array[i]) {
				for (var j = i * i; j < n; j += i) {
					array[j] = false
				}
			}
		}

		// All array[i] set to true are primes
		for (var i = 2; i < n; i++) {
			if (array[i]) {
				output.push(i)
			}
		}

		return [receive(output.pop())]
	})

export const epics = {
	primeEpic
}
