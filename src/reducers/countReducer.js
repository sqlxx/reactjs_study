import * as ActionTypes from '../actions/actionTypes'

function counter(state = {count: 0}, action) {
    const count = state.count
    switch (action.type) {
        case ActionTypes.INCREASE:
            return {count: count + 1} 
        case ActionTypes.DECREASE:
            return {count: count - 1}
        default: 
            return state
    }
}

export default counter