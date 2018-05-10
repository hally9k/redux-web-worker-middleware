import { connect } from 'react-redux'
import Prime from './prime'
import select from 'select'
import { start } from 'duck/prime'

const mapStateToProps = state => ({
	prime: select.prime(state)
})

const mapDispatchToProps = dispatch => ({
	start: () => dispatch(start())
})

export default connect(mapStateToProps, mapDispatchToProps)(Prime)
