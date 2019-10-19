import React, { Component } from 'react'

export class Specials extends Component {
    click = (e) => {
        this.props.click(this.props.click)    
    }

    render() {
        let className = 'btn btn-special btn-small'

        return (
            <button className={className} onClick={this.click}> {specialSymbols[this.props.special]} </button>

        )
    }
}

export default Specials

const specialSymbols = [
    'AC',
    '±',
    '%'

]