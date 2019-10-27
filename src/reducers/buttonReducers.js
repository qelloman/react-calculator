import { specialEnum } from '../const'

const buttonReducers = (state = {
    displayText: '0',
    prevNum: 0,
    prevOp: -1,
    lastButton: -1,
    writeNew: true,
    isLastClickOperator: false

}, action) => {
    switch (action.type) {

        case "CLICK_CLEAR":
            if (state.displayText === '0') {
                state = {
                    prevOp: -1,
                    prevNum: 0,
                    displayText: '0',
                    isLastClickOperator: false,
                    writeNew: true,
                    lastButton: -1,
                }
            } else {
                state = {
                    ...state,
                    displayText: '0',
                    writeNew: true,
                    lastButton: specialEnum.clear,
                }
            }
            break
        case "CLICK_OP":
            {   
                let opResult = state.prevNum
                if (state.isLastClickOperator === false) {
                    let currentNum = ( state.displayText.includes('.') ) ? parseFloat(state.displayText) : parseInt(state.displayText, 10)
                    switch(state.prevOp) {
                        case specialEnum.add:
                            opResult = state.prevNum + currentNum
                            break
                        case specialEnum.sub:
                            opResult = state.prevNum - currentNum
                            break
                        case specialEnum.mul:
                            opResult = state.prevNum * currentNum
                            break
                        case specialEnum.div:
                            opResult = state.prevNum / currentNum
                            break
                        default:
                            opResult = currentNum
                            break
                    }
                }
    
                state = {
                    ...state,
                    prevOp: action.button,
                    prevNum: opResult,
                    displayText: opResult.toString().substring(0,11), // maximum 11 digits
                    isLastClickOperator: true,
                    writeNew: true,
                    lastButton: action.button,
                }
            }
            break
        case "CLICK_SPECIAL":
            {
                let opResult = state.prevNum
                
                let currentNum = ( state.displayText.includes('.') ) ? parseFloat(state.displayText) : parseInt(state.displayText, 10)
                switch(action.button) {
                    case specialEnum.percent:
                        opResult = currentNum / 100
                        break
                    case specialEnum.signFlip:
                        opResult =  -currentNum
                        break
                    default:
                        opResult = currentNum
                        break
                }
                    
                console.log(opResult)
                state = {
                    ...state,
                    prevOp: action.button,
                    prevNum: opResult,
                    displayText: opResult.toString(),
                    isLastClickOperator: true,
                    writeNew: true,
                    lastButton: action.button,
                }
            }
            break
        case "CLICK_DIGIT":
            {
                let newDisplayText = ''
                
                // do not take another 0 when current number is 0.
                if (state.displayText === '0' && action.button === 0) {
                    newDisplayText = state.displayText
                }
                // do not take another input when the number of digits exceeds its maximum (12).
                // displays 11 digits at max 
                else if (state.displayText.length >= 11 ) {
                    newDisplayText = state.displayText                
                } 
                else {
                    let buttonChar = (action.button === 10) ? '.' : action.button.toString()
                    newDisplayText = state.writeNew ? buttonChar : state.displayText + buttonChar
                }
                state = {
                    ...state,
                    displayText: newDisplayText,
                    isLastClickOperator: false,
                    writeNew: false,
                    lastButton: action.button,

                }
            }
            break
        default:
            state ={
                ...state,
            }
            break
    }

    return state
}

export default buttonReducers