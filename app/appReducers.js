import { combineReducers } from 'redux'

function firstNumber(state=null, action) {
  switch(action.type) {
    case 'INPUT_FIRST_NUMBER':
      return action.value
    case 'RESET':
      return null
    default:
      return state
  }
}

function secondNumber(state=null, action) {
  switch(action.type) {
    case 'RESET':
      return null
    default:
      return state
  }
}

function operation(state=null, action) {
  switch(action.type) {
    case 'INPUT_OPERATION':
      return action.value
    case 'RESET':
      return null
    default:
      return state
  }
}

function result(state=null, action) {
  switch(action.type) {
    case 'SET_RESULT':
      return action.result
    case 'RESET':
      return null
    default:
      return state
  }
}

function hasError(state = false, action) {
  switch(action.type) {
    case 'ERROR':
      return true
    case 'RESET':
      return false
    default:
      return state
  }
}

export default combineReducers({
  firstNumber: firstNumber,
  secondNumber: secondNumber,
  operation: operation,
  result: result,
  hasError: hasError,
})
