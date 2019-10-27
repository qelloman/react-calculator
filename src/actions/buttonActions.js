
export function clickDigit(digit) {
    return {
        type: "CLICK_DIGIT",
        button: digit,
    }
}

export function clickOp(op) {
    return {
        type: "CLICK_OP",
        button: op,
    }
}

export function clickSpecial(op) {
    return {
        type: "CLICK_SPECIAL",
        button: op,
    }
}

export function clickClear() {
    return {
        type: "CLICK_CLEAR",
        
    }
}