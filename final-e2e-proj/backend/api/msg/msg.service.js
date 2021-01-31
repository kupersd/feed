const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
var gravatar = require('gravatar');

async function query(filterBy = {}) {
    try {
        const criteria = _buildCriteria(filterBy) || {}
        const collection = await dbService.getCollection('msg')
        const msgs = await collection.find(criteria).toArray()
        return msgs
    } catch (err) {
        logger.error('cannot find msgs', err)
        throw err
    }

}

async function remove(msgId) {
    try {
        // const store = asyncLocalStorage.getStore()
        // const { userId, isAdmin } = store
        const collection = await dbService.getCollection('msg')
        const query = { _id: ObjectId(msgId) }
        // if (!isAdmin) query.byUserId = ObjectId(userId)
        await collection.deleteOne(query)
    } catch (err) {
        logger.error(`cannot remove msg ${msgId}`, err)
        throw err
    }
}


async function add(msg) {
    console.log('service got req');
    try {
       
        // msg.imgUrl =  gravatar.url(msg.email)
        msg.imgUrl = `https://robohash.org/${msg.email}?set=set5`
        console.log(msg.imgUrl)
        const collection = await dbService.getCollection('msg')
        await collection.insertOne(msg)
        return msg
    } catch (err) {
        logger.error('cannot insert msg', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (!filterBy.txt) return null
    const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
    criteria.$or = [
        {
            txt: txtCriteria
        },
        {
            email: txtCriteria
        },
    ]
    return criteria
}

module.exports = {
    query,
    remove,
    add
}


