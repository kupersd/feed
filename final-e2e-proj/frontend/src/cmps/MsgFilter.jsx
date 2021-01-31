import React from 'react'

export class MsgFilter extends React.Component {
    state = {
        filterBy: {
            txt: ''
        }
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }
    
    render() {
        const { txt } = this.state.filterBy
        return (
            <div className='toy-filter'>
                <h1>Filter:</h1>
                    <input type="text" name='txt' value={txt} onChange={this.handleChange} />
            </div>
        )
    }
}

