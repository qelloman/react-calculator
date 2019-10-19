import React, { Component } from 'react'

export class Specials extends Component {
    click = (e) => {
        this.props.click(this.props.click)    
    }

    render() {
        return (
            <button onClick={this.click}> {specialSymbols[this.props.special]} </button>

        )
    }
}

export default Specials

const specialSymbols = [
    'C',
]