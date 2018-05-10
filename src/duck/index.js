import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import prime from 'duck/prime'
import { wrapEpic } from 'utility/rx'

export default combineReducers({
	prime
})
