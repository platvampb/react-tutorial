import React, { Component } from 'react'
import Button from './Button'

export default class Panel extends Component {
  render() {
    const {reset, calculate, inputNumber, inputOperation} = this.props

    //all buttons in order
    const inputs = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 'CE', 0, '=', '/']

    let buttons = inputs.map((input) => {
      let inputFn = inputNumber

      if (typeof(input) === 'string') {
        if (input === '=') {
          inputFn = calculate
        } else if (input === 'CE') {
        } else {
          inputFn = inputOperation
        }
      }
      

      return <Button
        input={input}
        handleClick={inputFn}
        key={input}
      />
    })

    return (
      <div className='panel'>
        {buttons}
      </div>
    )
  }
}
