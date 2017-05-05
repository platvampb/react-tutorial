import React, { Component } from 'react'

export default class Completed extends Component {
	render() {
		let completed = this.props.completed
		let stepNumber = this.props.stepNumber
		let completeContent = (
			<span className="completed">
				completed
				{ stepNumber == 5 ? '!' : '.'}
			</span>
		)
		if (completed)
			return completeContent

		return null
	}
}

