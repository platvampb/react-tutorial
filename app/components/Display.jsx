import React, { Component } from 'react'
import Box from './Box'

export default class Display extends Component {
  render() {
    const {hasError} = this.props

    //all display fields in order
    const displayFields = [
      'firstNumber',
      'operation',
      'secondNumber',
      'equal',
      'result',
    ]

    let displayBoxes = displayFields.map((name) => 
      <Box
        fieldName={name}
        value={this.props[name]}
        hasError={hasError}
        key={name}
      />
    )
    return (
      <div className="display">
        {displayBoxes}
      </div>
    )
  }
}
