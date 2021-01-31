import { httpService } from './httpService'
// import { storageService } from './asyncStorageService'
// import userService from './userService'
// import { utilService } from './utilService'

export const msgService = {
  add,
  query,
  remove
}


// More ways to send query params:
// return axios.get('api/toy/?id=1223&balance=13')
// return axios.get('api/toy/?', {params: {id: 1223, balanse:13}})

function query(filterBy) {
  var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  // return Promise.resolve([{ txt: 'Hi' , email: 'puki', imgUrl: 'www.image.com'}, { txt: 'Hi MOSHE' , email: 'puki DA', imgUrl: 'www.image1234.com'} ])
  return httpService.get(`msg${queryStr}`)
  // return storageService.query('msg')
}

function remove(msgId) {
  return httpService.delete(`msg/${msgId}`)
  // return storageService.delete('msg', msgId)

}
async function add(msg) {
  const addedMsg = await httpService.post(`msg`, msg)

  // msg.byUser = userService.getLoggedinUser()
  // msg.aboutUser = await userService.getById(msg.aboutUserId)
  // const addedMsg = storageService.post('msg', msg)

  return addedMsg
}
