import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MsgFilter } from '../cmps/MsgFilter'
import { loadMsgs } from '../store/actions/msgActions'

class _Feed extends Component {
    state = {
        msg: { txt: '', email: '' },
    }

    async componentDidMount() {
        await this.props.loadMsgs({})
      }

    sendMsg = ev => {
        ev.preventDefault()
        console.log('saving msg:', this.state.newMsg)
        // msgService.sendMsg(this.state.newMsg)
        //   socketService.emit('chat newMsg', { from, txt: this.state.msg.txt })
        //   this.setState({ msg: { from: 'Me', txt: '' } })
    }

    handleChange = ev => {
        const { name, value } = ev.target
        this.setState(prevState => {
            return {
                ...prevState,
                newMsg: {
                    ...prevState.newMsg,
                    [name]: value
                }
            }
        })
    }
    handleFilterChange = ev => {
        this.setState(prevState => {
            return {
                ...prevState,
                filterBy: ev.target.value
            }
        })
    }

    msgHandleChange = ev => {
        const { name, value } = ev.target
        this.setState(prevState => {
            return {
                msg: {
                    ...prevState.msg,
                    [name]: value
                }
            }
        })
    }

    render() {
        const { newMsg, filterBy } = this.state
        const { msgs } = this.props

        return (
            <section className="feed">

                <form className="compose" onSubmit={this.sendMsg}>
                    <input
                        placeholder="Email"
                        type="text"
                        name="email"
                        onChange={this.handleChange}
                        value={newMsg.email} />
                    <textarea
                        rows="5"
                        cols="60"
                        placeholder="Message"
                        name="txt"
                        onChange={this.handleChange}
                        value={newMsg.txt} />

                    <button>SUBMIT</button>
                </form>

                <div className="filter">
                    {/* <label htmlFor="filterBy"> */}
                    {/* <SearchIcon /> */}
                    {/* </label> */}
                    <input
                        type="text"
                        name="filterBy"
                        onChange={this.handleFilterChange}
                        placeholder="Filter"
                        value={filterBy} />
                </div>
                <ul className="feed-messages clean-list">
                    {msgs.map(msg => {
                        return (
                            <li key={msg.id} className="flex">
                                <div className="avatar">

                                    <img src={msg.miniuser.imgUrl} alt="" />
                                </div>
                                <div className="flex column">
                                    <h4>{msg.miniuser.email}</h4>
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
    loadMsgs
  }
  
  export const Feed = connect(mapStateToProps, mapDispatchToProps)(_Feed)
  