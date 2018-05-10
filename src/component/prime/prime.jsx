import * as React from 'react'
import './prime.scss'

export default class Prime extends React.Component {
	render() {
		const { prime, requestPrime } = this.props
		return (
			<div>
				{prime.map((x, index) => (
					<span key={index}>
						{index > 0 ? ', ' : ''}
						{x}
					</span>
				))}
				<div>
					<button onClick={requestPrime}>Next</button>
				</div>
			</div>
		)
	}
}
