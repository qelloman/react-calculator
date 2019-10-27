import React from 'react'
import '../css/components.css'

export const Display = (props) => {

    let fontSize = 50
    let textLength = props.displayText.length
    
    // adpatively change the font size.
    if (textLength === 8) {
        fontSize = 48
    } else if (textLength === 9) {
        fontSize = 43
    } else if (textLength === 10) {
        fontSize = 39
    } else if (textLength === 11) {
        fontSize = 35
    } 

    console.log(fontSize)
    return (
        <div className='displayPanel' style={{fontSize: fontSize}}>
            {props.displayText}
        </div>
    )

}
