import React, { Component } from 'react'
import { connect } from 'react-redux'

import Step from './Step'
import Completed from './Completed'
import CompleteLink from './CompleteLink'

class AppBody extends Component {
  constructor(props) {
    super(props)

    this.completeStep = this.completeStep.bind(this)
  }

  render() {
    //props.completed came from redux state tree
    let completed = this.props.completed
    let step = this.props.step

    return (
      <div className="step">
        <Step stepNumber={step}/>
        <Completed
          completed={completed}
          stepNumber={step}
        />
        <CompleteLink
          completed={completed}
          completeStep={this.completeStep}
        />
      </div>
    )
  }

  completeStep() {
    //dispatch call is also injected by redux
    this.props.dispatch({
        type: 'TOGGLE_COMPLETE',
    })
  }
}

// Select the data to be used from the Redux state tree
function select(state) {
  return {
    completed: state.completed,
    step: state.step,
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(AppBody)
