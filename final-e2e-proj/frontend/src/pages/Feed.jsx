import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { FeedList } from '../cmps/FeedList'
import { socketService } from '../services/socketService'
import { loadMsgs, addMsg, showNewMsg, removeMsg } from '../store/actions/msgActions'

function _Feed(props) {

    const [msg, setMsg] = useState({ txt: '', email: '' })

    const onNewMsg = (msg) => {
        props.showNewMsg(msg)
        console.log('got new msg');
    }
    useEffect(async() => {
        socketService.on('newMsg', onNewMsg)
        try {
            await props.loadMsgs()
        } catch (err) {
            console.log(err)
        }
        return () => {
            socketService.off('newMsg')
        }
    }, [])

    const onAddMsg = async ev => {
        ev.preventDefault()
        try {
            await props.addMsg(msg)
        } catch (err) {
            console.log(err)
        }
    }

    const onRemoveMsg = async (msgId) => {
        try {
            await props.removeMsg(msgId)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = ev => {
        const { name, value } = ev.target
        setMsg(msg => ({ ...msg, [name]: value }))
    }

    const handleFilterChange = async ev => {
        try {
            await props.loadMsgs({ txt: ev.target.value })
        } catch (err) {
            console.log(err);
        }
    }

    const { msgs } = props
    return (
        <section className="feed">

            <form className="compose" onSubmit={onAddMsg}>
                <input
                    placeholder="Email"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={msg.email} />
                <textarea
                    rows="5"
                    cols="60"
                    placeholder="Message"
                    name="txt"
                    onChange={handleChange}
                    value={msg.txt} />

                <button>SUBMIT</button>
            </form>

            <div className="filter">
                <input
                    type="text"
                    name="filterBy"
                    onChange={handleFilterChange}
                    placeholder="Search"
                />
            </div>

            <FeedList msgs={msgs} onRemoveMsg={onRemoveMsg}/>
        </section>
    )

}

const mapStateToProps = state => {
    return {
        msgs: state.msgModule.msgs
    }
}
const mapDispatchToProps = {
    loadMsgs,
    addMsg,
    showNewMsg,
    removeMsg
}

export const Feed = connect(mapStateToProps, mapDispatchToProps)(_Feed)