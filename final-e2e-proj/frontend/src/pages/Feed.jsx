import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MsgFilter } from '../cmps/MsgFilter'
import { loadMsgs, addMsg } from '../store/actions/msgActions'

class _Feed extends Component {
    state = {
        msg: { txt: '', email: '' },
    }

    async componentDidMount() {
        await this.props.loadMsgs({})
      }

    onAddMsg = async ev => {
        ev.preventDefault()
        console.log('saving msg:', this.state.msg)
        await addMsg(this.state.msg)
    }

    handleChange = ev => {
        const { name, value } = ev.target
        this.setState(prevState => {
            return {
                ...prevState,
                msg: {
                    ...prevState.msg,
                    [name]: value
                }
            }
        })
    }
    handleFilterChange = async ev => {
        this.setState(prevState => {
            return {
                ...prevState,
                filterBy: ev.target.value
            }
        })
        await this.props.loadMsgs(this.state.filterBy)
    }

    render() {
        const { msg, filterBy } = this.state
        const { msgs } = this.props
        return (
            <section className="feed">

                <form className="compose" onSubmit={this.onAddMsg}>
                    <input
                        placeholder="Email"
                        type="text"
                        name="email"
                        onChange={this.handleChange}
                        value={msg.email} />
                    <textarea
                        rows="5"
                        cols="60"
                        placeholder="Message"
                        name="txt"
                        onChange={this.handleChange}
                        value={msg.txt} />

                    <button>SUBMIT</button>
                </form>

                <div className="filter">
                    <input
                        type="text"
                        name="filterBy"
                        onChange={this.handleFilterChange}
                        placeholder="Filter"
                        value={filterBy} />
                </div>
                <ul className="feed-messages clean-list">
                    {msgs.map((msg, idx) => {
                        return (
                            <li key={idx} className="flex align-center">
                                <div className="avatar">

                                    <img src={`https://www.gravatar.com/avatar/ori.weinstock@gmail.com}`} alt="" />
                                </div>
                                <div className="flex column">
                                    <h4>{msg.email}</h4>
                                    <p>{msg.txt}</p>
                                </div>
                            </li>
                        )
                    }
                    )}
                </ul>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        msgs: state.msgModule.msgs
    }
}
const mapDispatchToProps = {
    loadMsgs,
    addMsg
}

export const Feed = connect(mapStateToProps, mapDispatchToProps)(_Feed)