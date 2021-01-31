import { msgService } from '../../services/msgService'

export function loadMsgs(filter) {
  return async dispatch => {
    try {
      const msgs = await msgService.query(filter)
      dispatch({ type: 'SET_MSGS', msgs: msgs })

    } catch (err) {
      console.log('MsgActions: err in loadMsgs', err)
    }
  }
}

export function addMsg(msg) {
  return async dispatch => {
    try {
      const addedMsg = await msgService.add(msg)
      dispatch({ type: 'ADD_MSG', msg: addedMsg })
    } catch (err) {
      console.log('MsgActions: err in addMsg', err)
    }
  }
}

export function removeMsg(msgId) {
  return async dispatch => {
    try {
      await msgService.remove(msgId)
      dispatch({ type: 'REMOVE_MSG', msgId })
    } catch (err) {
      console.log('MsgActions: err in removeMsg', err)
    }
  }
}
