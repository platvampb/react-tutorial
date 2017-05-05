import React, { Component } from 'react'

export default class Box extends Component {
  render() {
    const {fieldName, value, hasError} = this.props

    let styleClass = (fieldName === 'operation' ? ' ' + fieldName : '')
    let display = value

    if (fieldName === 'equal') {
      styleClass = ' ' + fieldName
      display = '='
    }

    if (hasError && value === null && fieldName != 'result') {
      styleClass += ' error'
    }

    return (
      <div className={'box' + styleClass}>
        {display === null ? '' : display}
      </div>
    )
  }
}
