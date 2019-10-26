import React, { Component } from 'react'

export class Operators extends Component {

    constructor() {
        super();

        this.state = {
            clicked: false
        }
    }
    click = (e) => {
        this.props.click(this.props.op)
        this.setState( {
            clicked: true
        })
        
    }
    render() {
        let className = 'btn btn-small'
        if (this.props.op === this.props.lastOp) {
            className += ' btn-operator-clicked'
        } else {
            className += ' btn-operator'
        }
        return (
            <button className={className} onClick={this.click}> {opSymbols[this.props.op]} </button>
        )
    }
}

export default Operators


