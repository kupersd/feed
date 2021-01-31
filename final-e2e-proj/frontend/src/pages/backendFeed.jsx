import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MsgFilter } from '../cmps/MsgFilter'
import { socketService } from '../services/socketService'
import { loadMsgs } from '../store/actions/msgActions'

class _Feed extends Component {
  state = {
    msg: { txt: '', email: '' },
  }

  async componentDidMount() {
    await this.props.loadMsgs({})
  }

  onSetFilter = async filterBy => {
    await this.props.loadMsgs(filterBy)
  }

  addMsg = newMsg => {
    this.setState(prevState => ({ msgs: [...prevState.msgs, newMsg] }))
  }

  sendMsg = ev => {
    ev.preventDefault()
    this.setState({ msg: { from: 'Me', txt: '' } })
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
    return (
      <div>
        <MsgFilter onSetFilter={this.onSetFilter}/>
        <h1>{JSON.stringify(this.props.msgs, null, 2)}</h1>
      </div>
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
