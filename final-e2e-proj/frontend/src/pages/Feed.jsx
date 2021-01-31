import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FeedList } from '../cmps/FeedList'
import { socketService } from '../services/socketService'
import { loadMsgs, addMsg, showNewMsg } from '../store/actions/msgActions'

class _Feed extends Component {
    state = {
        msg: { txt: '', email: '' },
    }

    async componentDidMount() {
        socketService.on('newMsg' ,this.onNewMsg)
        try {
            await this.props.loadMsgs()
        } catch (err) {
            console.log(err)
        }
      }

    onNewMsg = (msg) => {
        this.props.showNewMsg(msg)
    }

    onAddMsg = async ev => {
        ev.preventDefault()
        try {
            await this.props.addMsg(this.state.msg)
        } catch (err) {
            console.log(err)
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
        try{
            await this.props.loadMsgs({txt: ev.target.value})
        } catch(err){
            console.log(err);
        }
    }


    render() {
        const { msg } = this.state
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
                        placeholder="Search"
                        />
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
    addMsg,
    showNewMsg
}

export const Feed = connect(mapStateToProps, mapDispatchToProps)(_Feed)