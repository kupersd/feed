import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FeedList } from '../cmps/FeedList'
import { loadMsgs, addMsg } from '../store/actions/msgActions'

class _Feed extends Component {
    state = {
        msg: { txt: '', email: '' },
    }

    async componentDidMount() {
        try {
            await this.props.loadMsgs({})
        } catch (err) {
            alert(err)
        }
      }

    onAddMsg = async ev => {
        ev.preventDefault()
        console.log('saving msg:', this.state.msg)
        try {
            await addMsg(this.state.msg)
        } catch (err) {
            alert(err)
        }
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
        try {
            await this.props.loadMsgs(this.state.filterBy)
        } catch (err) {
            alert(err)
        }
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

                <FeedList msgs={msgs} />
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