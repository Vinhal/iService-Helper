const createReducer = actions => (state, action) => {
    const reducer = actions[action.type]
    return reducer ? reducer(state, action.value) : {
        ...state,
    }
}

export default createReducer
