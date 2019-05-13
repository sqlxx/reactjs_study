import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as ActionTypes from '../../actions/actionTypes'

export class Counter extends React.Component {
    render() {
        const {value, onIncreaseClick, onDecreaseClick} = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={onDecreaseClick}>Decrease</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        value: state.counterReducer.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction),
        onDecreaseClick: () => dispatch(decreaseAction)
    }
}

const increaseAction = {type: ActionTypes.INCREASE}
const decreaseAction = {type: ActionTypes.DECREASE}

const CountApp = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CountApp
