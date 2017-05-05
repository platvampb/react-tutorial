import { combineReducers } from 'redux'

function completed(state = false, action) {
  switch(action.type) {
		case 'TOGGLE_COMPLETE':
			return !state
		default:
			return state
  }
}

function step(state = 0, action) {
	switch(action.type) {
		default:
			return state
	}
}

export default combineReducers({
	completed: completed,
	step: step,
})
