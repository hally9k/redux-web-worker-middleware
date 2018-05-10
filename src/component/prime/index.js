import { connect } from 'react-redux'
import Prime from './prime'
import select from 'select'
import { request } from 'duck/prime'

const mapStateToProps = state => ({
	prime: select.prime(state)
})

const mapDispatchToProps = dispatch => ({
	requestPrime: payload => dispatch(request())
})

export default connect(mapStateToProps, mapDispatchToProps)(Prime)
