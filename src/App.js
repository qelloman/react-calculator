import React, { Component } from 'react'
import Buttons from './components/Buttons.js'
import Display from './components/Display.js'
import {opSymbols, specialSymbols, specialEnum, opEnum} from './components/const.js'
import './App.css'

export class App extends Component {

  constructor() {
    super();
    this.clickDigit = this.clickDigit.bind(this)
    this.clickOp = this.clickOp.bind(this)
    this.clearCalculator = this.clearCalculator.bind(this)

  }
  state = {
    displayText: '0',
    lastOperator: undefined,
    lastNumber: undefined,
    isLastClickOperator: false,
    overwriteNum: true,
  }

  clearCalculator() {
    this.setState({
      displayText: '0',
      lastOperator: undefined,
      lastNumber: undefined,
      isLastClickOperator: false,
      overwriteNum: true,  
    })
  }

  clickDigit(digit) {
    let displayText = this.state.overwriteNum ? String(digit) : this.state.displayText + String(digit)
    this.setState({ 
      displayText: displayText,
      overwriteNum: false,
      isLastClickOperator: false,
    })
  }
  clickOp(op) {
    
    let opResult = this.state.lastNumber
    if (this.state.isLastClickOperator === false) {
      let currentNumber = parseInt(this.state.displayText, 10)
      switch(this.state.lastOperator) {
        case opEnum.add:
          opResult = this.state.lastNumber + currentNumber
          break
        case opEnum.sub:
          opResult = this.state.lastNumber - currentNumber
          break
        case opEnum.mul:
          opResult = this.state.lastNumber * currentNumber
          break
        case opEnum.div:
          opResult = this.state.lastNumber / currentNumber
          break
        default:
          opResult = currentNumber
          break
      }
    }
    this.setState({
      lastOperator: op,
      lastNumber: opResult,
      displayText: opResult.toString(),
      isLastClickOperator: true,
      overwriteNum: true,
    })
  }


  render() {
    return (
      <div className="container">
          <Display displayText={this.state.displayText}/>
          <Buttons
          clickDigit={this.clickDigit}
          clickOp={this.clickOp}
          clearCalculator={this.clearCalculator}        
          />        
      </div>
    )
  }
}

export default App
