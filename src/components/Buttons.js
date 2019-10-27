import React from "react"

import { specialSymbols } from '../const'
import '../css/components.css'

export const Buttons = (props) => {

    // use css class to display different styles of buttons.
    let className = 'btn btn-small'
    let button = props.button
    let buttonDisplay = ''
    className += (props.button === 0) ? ' btn-wide' : ' btn-small'
    if (button < 10) {
        className += ' btn-number'
        buttonDisplay = button.toString()
    } else if (button === 10) {
        className += ' btn-number'
        buttonDisplay = specialSymbols[button]
    // Highlight lastly-clicked operation button
    } else if (button >= 11 && button < 16) {
        className += (props.button === props.lastButton) ? ' btn-operator-clicked' : ' btn-operator'
        buttonDisplay = specialSymbols[button]
    } else if (button >= 16 && button < 18) {
        className += ' btn-special'
        buttonDisplay = specialSymbols[button]
    } else if (button === 18 ) {
        className += ' btn-special'
        buttonDisplay = (props.displayText === '0') ? 'AC' : 'C'
    }
    
    return (
        <button className={className} onClick={props.click}> {buttonDisplay} </button>
    )
    
}

