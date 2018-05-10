import * as React from 'react'
import './prime.scss'

export default class Prime extends React.Component {
	render() {
		const { prime, start, count } = this.props
		return (
			<div className="container">
				<div>{count}</div>
				{prime.get('number') || '?'}
				<div>{prime.get('working') && <div className="lds-circle" />}</div>
				<div>{prime.get('done') && 'DONE'}</div>
				<div>
					<button onClick={start}>Start</button>
				</div>
			</div>
		)
	}
}
