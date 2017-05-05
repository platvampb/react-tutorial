import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const {input, handleClick} = this.props

    return (
      <div
        className='button'
        onClick={this.clickHandler.bind(this)}
      >
        {input}
      </div>
    )
  }

  clickHandler() {
    this.props.handleClick(this.props.input)
  }
}
