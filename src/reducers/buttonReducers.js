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
        // AC or C
        case "CLICK_CLEAR":
            // all clear
            // remove everything and return back to initial state.
            if (state.displayText === '0') {
                state = {
                    prevOp: -1,
                    prevNum: 0,
                    displayText: '0',
                    isLastClickOperator: false,
                    writeNew: true,
                    lastButton: -1,
                }
            // clear
            // remove current typed number (not the result) and take new number input
            } else {
                state = {
                    ...state,
                    displayText: '0',
                    writeNew: true,
                    lastButton: specialEnum.clear,
                }
            }
            break
        // math operations (+, -, *, /, and =)
        // If previous number or result exsits, perform mathmatical operation with current number.
        // Highlight the operation button which was pressed in the last time.
        // User can change the oepration after the click another one.
        // Next operation will be performed only based on the last clicked operation button.
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

                // Note that state stores operation results and its display seperataely.
                // This is to limit the number of digits to display while keeping the operation result.
                // For example, 1 / 3 = 0.333333333333...
                // Display only shows the 12 digits including the dot,
                // But, if you multiply by 3 again, the result will be 1.
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
        // special operations ( flip the sign, percent )
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
        // take number input
        // only take a new input after the operation 
        case "CLICK_DIGIT":
            {
                let newDisplayText = ''
                
                // do not take another 0 when current number is 0.
                if (state.displayText === '0' && action.button === 0) {
                    newDisplayText = state.displayText
                }
                // do not take another input when the number of digits exceeds its maximum (12).
                // displays 11 digits at max 
                else if (state.displayText.length >= 11 && state.writeNew === false) {
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