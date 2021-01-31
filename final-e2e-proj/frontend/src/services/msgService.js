import { httpService } from './httpService'


export const msgService = {
  add,
  query,
  remove
}

function query(filterBy) {
  var queryStr = (!filterBy) ? '' : `?txt=${filterBy.txt}`
  return httpService.get(`msg${queryStr}`)
  
}

function remove(msgId) {
  return httpService.delete(`msg/${msgId}`)

}
async function add(msg) {

  const addedMsg = await httpService.post(`msg`, msg)
  return addedMsg
}
