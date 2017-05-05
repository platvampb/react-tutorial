import React, { Component } from 'react'

export default class CompleteLink extends Component {
  constructor(props) {
    super(props)

    this.completeStep = this.completeStep.bind(this)
  }
  render() {
    return (
      <div
        className="complete"
        onClick={this.completeStep}
      >
        Click to complete!
      </div>
    )
  }

  completeStep() {
    console.log('I am clicked!')
    this.props.completed = true
  }
}

