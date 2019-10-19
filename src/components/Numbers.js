import React, { Component } from 'react'
import './components.css'



export class Numbers extends Component {
    click = (e) => {
        this.props.click(this.props.digit)    
    }
    render() {

        let className = 'btn btn-number'
        className += (this.props.digit === '0') ? ' btn-wide' : ' btn-small'

        return (
            <button className={className} onClick={this.click}> {this.props.digit} </button>
        )
    }
}

export default Numbers
