import React, { Component } from 'react'

export class Operators extends Component {
    click = (e) => {
        this.props.click(this.props.op)    
    }
    render() {
        let className = 'btn btn-operator btn-small'
        return (
            <button className={className} onClick={this.click}> {opSymbols[this.props.op]} </button>
        )
    }
}

export default Operators

const opSymbols = [
    '+', '-', '×', '÷', '='
]
