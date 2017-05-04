import React, { Component } from 'react'

export default class Step extends Component {
	render() {
		let stepNumber = this.props.stepNumber
		return (
			<span className="step">
				Step {stepNumber}&nbsp;
			</span>
		)
	}
}

