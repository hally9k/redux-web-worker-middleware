import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import prime, { epics as primeEpics } from 'duck/prime'
import { wrapEpic } from 'utility/rx'

export default combineReducers({
	prime
})

export const epics = combineEpics(...[...Object.values(primeEpics)].map(wrapEpic))
