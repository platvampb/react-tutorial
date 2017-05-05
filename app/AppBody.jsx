import React, { Component } from 'react'
import { connect } from 'react-redux'

import Display from './components/Display'
import Panel from './components/Panel'

//const is similar to let, except that whatever declared cannot be modified later
const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
}

class AppBody extends Component {
  constructor(props) {
    super(props)

    this.inputNumber = this.inputNumber.bind(this)
    this.inputOperation = this.inputOperation.bind(this)
    this.calculate = this.calculate.bind(this)
    this.reset= this.reset.bind(this)
  }

  render() {
    const {firstNumber, secondNumber, operation, result, dispatch, hasError} = this.props

    return (
      <div className="calculator">
        <Display
          firstNumber={firstNumber}
          operation={operation}
          secondNumber={secondNumber}
          result={result}
          hasError={hasError}
        />
        <Panel
          reset={this.reset}
          calculate={this.calculate}
          inputNumber={this.inputNumber}
          inputOperation={this.inputOperation}
        />
      </div>
    )
  }

  inputNumber(number) {
    const {firstNumber, secondNumber, operation, dispatch} = this.props

    if (firstNumber === null) {
      dispatch({
        type: 'INPUT_FIRST_NUMBER',
        value: number,
      })

      return
    }

    if (operation === null) return

    if (secondNumber === null && number != 0) {
      dispatch({
        type: 'INPUT_SECOND_NUMBER',
        value: number,
      })
    }
  }

  inputOperation(op) {
    const {firstNumber, operation, dispatch} = this.props

    if (firstNumber === null) return

    if (operation === null) {
      dispatch({
        type: 'INPUT_OPERATION',
        value: op,
      })
    }
  }

  calculate() {
    const {firstNumber, secondNumber, operation, dispatch} = this.props

    if (secondNumber === null ||
        operation === null ||
        firstNumber === null) {
      dispatch({
        type: 'ERROR',
      })

      return
    }

    let result = operations[operation](firstNumber, secondNumber)
    result = result.toFixed(2).replace(/\.00$/, '')

    dispatch({
      type: 'SET_RESULT',
      result: result,
    })
  }

  reset() {
    this.props.dispatch({
      type: 'RESET',
    })
  }
}

// Select the data to be used from the Redux state tree
function select(state) {
  return {
    firstNumber: state.firstNumber,
    secondNumber: state.secondNumber,
    operation: state.operation,
    reset: state.reset,
    hasError: state.hasError,
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(AppBody)
