const logger = require('../../services/logger.service')
const msgService = require('./msg.service')

async function getMsgs(req, res) {
    try {
        const msgs = await msgService.query(req.query)
        res.send(msgs)
    } catch (err) {
        logger.error('Cannot get msgs', err)
        res.status(500).send({ err: 'Failed to get msgs' })
    }
}

async function deleteMsg(req, res) {
    try {
        await msgService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete msg', err)
        res.status(500).send({ err: 'Failed to delete msg' })
    }
}


async function addMsg(req, res) {
    console.log('controller got req')
    try {
        var msg = req.body
        msg = await msgService.add(msg)
        res.send(msg)

    } catch (err) {
        logger.error('Failed to add msg', err)
        res.status(500).send({ err: 'Failed to add msg' })
    }
}

module.exports = {
    getMsgs,
    deleteMsg,
    addMsg
}