const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {log} = require('../../middlewares/logger.middleware')
const {addMsg, getMsgs, deleteMsg} = require('./msg.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getMsgs)
router.post('/', addMsg)
router.delete('/:id', deleteMsg)

module.exports = router