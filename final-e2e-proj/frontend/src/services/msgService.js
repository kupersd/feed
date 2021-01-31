import { httpService } from './httpService'
// import { storageService } from './asyncStorageService'
// import userService from './userService'
// import { utilService } from './utilService'

export const msgService = {
  add,
  query,
  remove
}

const imgURL1 = 'https://tinyfac.es/data/avatars/03F55412-DE8A-4F83-AAA6-D67EE5CE48DA-500w.jpeg'
const imgURL2 = 'https://tinyfac.es/data/avatars/FBEBF655-4886-455A-A4A4-D62B77DD419B-200w.jpeg'
const imgURL3 = 'https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg'
// More ways to send query params:
// return axios.get('api/toy/?id=1223&balance=13')
// return axios.get('api/toy/?', {params: {id: 1223, balanse:13}})

function query(filterBy) {
  var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  console.log(filterBy);
  // return Promise.resolve([{ txt: 'Hi' , email: 'puki', imgUrl: imgURL1}, { txt: 'Hi MOSHE' , email: 'puki DA', imgUrl: imgURL2} ])
  return httpService.get(`msg${queryStr}`)
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
