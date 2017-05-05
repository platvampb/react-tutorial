import React, { Component } from 'react'

export default class CompleteLink extends Component {
  render() {
    return (
      <div
        className="complete"
        onClick={this.props.completeStep}
      >
        Click to complete!
      </div>
    )
  }
}

