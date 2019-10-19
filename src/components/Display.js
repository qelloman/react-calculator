import React, { Component } from 'react'
import './components.css'
export class Display extends Component {
    render() {
        return (
            <div className='displayPanel'>
                {this.props.displayText}
                
            </div>
        )
    }
}

export default Display
