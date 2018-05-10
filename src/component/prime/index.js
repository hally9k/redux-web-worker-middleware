import { connect } from 'react-redux'
import Prime from './prime'
import select from 'select'
import { start } from 'duck/prime'

let count = 0

const mapStateToProps = state => ({
	prime: select.prime(state),
	count: count++
})

const mapDispatchToProps = dispatch => ({
	start: () => dispatch(start())
})

export default connect(mapStateToProps, mapDispatchToProps)(Prime)
