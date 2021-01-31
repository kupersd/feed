const initialState = {
  msgs: [],
}

export function msgReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_MSGS':
      return { ...state, msgs: action.msgs }
    case 'ADD_MSG':
      return { ...state, msgs: [...state.msgs, action.msg] }
    case 'REMOVE_MSG':
      return { ...state, msgs: state.msgs.filter(msg => msg._id !== action.msgId) }
    case 'UPDATE_MSG':
      return {
        ...state,
        msgs: state.msgs.map(msg =>
          msg._id === action.msg._id ? action.msg : msg
        )}
    default:
      return state
  }
}
