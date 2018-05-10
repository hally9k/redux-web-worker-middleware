import React from 'react'
import { hot } from 'react-hot-loader'
import Prime from './prime'
import color from 'utility/color'
import './index.scss'

class Root extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			colorName: null,
			backgroundImage: null
		}
	}
	render() {
		return (
			<div className="app">
				<Prime />
			</div>
		)
	}
}

export default hot(module)(Root)
