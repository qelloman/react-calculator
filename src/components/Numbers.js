import React, { Component } from 'react'
import '../App.css'



export class Numbers extends Component {
    click = (e) => {
        this.props.click(this.props.digit)    
    }
    render() {
        return (
            <button className='btn btn-small btn-number' onClick={this.click}> {this.props.digit} </button>
        )
    }
}

export default Numbers
