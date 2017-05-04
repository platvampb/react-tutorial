import React, { Component } from 'react'

export default class Completed extends Component {
	render() {
		let completed = this.props.completed
		let completeContent = (
			<span className="completed">
				completed!
			</span>
		)
		if (completed)
			return completeContent

		return null
	}
}

