import React, { Component } from 'react'
import Numbers from './components/Numbers.js'
import Operators from './components/Operators.js'
import Specials from './components/Specials.js'
import Display from './components/Display.js'
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
    overwriteNum: true,
  }

  clearCalculator() {
    this.setState({
      displayText: '0',
      lastOperator: undefined,
      lastNumber: undefined,
      overwriteNum: true,  
    })
  }

  clickDigit(digit) {
    let displayText = this.state.overwriteNum ? String(digit) : this.state.displayText + String(digit)
    this.setState({ 
      displayText: displayText,
      overwriteNum: false,
    })
  }
  clickOp(op) {
    let opResult = 0
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
    this.setState({
      lastOperator: op,
      lastNumber: opResult,
      displayText: opResult.toString(),
      overwriteNum: true,
    })
  }


  render() {
    return (
      <div className="container" style={containerStyle}>
        <div>
          <Display displayText={this.state.displayText}/>
        </div>
        <div>
          <Numbers digit='7' click={this.clickDigit} />
          <Numbers digit='8' click={this.clickDigit}/>
          <Numbers digit='9' click={this.clickDigit}/>
        </div>
        <div>
          <Numbers digit='4' click={this.clickDigit}/>
          <Numbers digit='5' click={this.clickDigit}/>
          <Numbers digit='6' click={this.clickDigit}/>
        </div>
        <div>
          <Numbers digit='1' click={this.clickDigit}/>
          <Numbers digit='2' click={this.clickDigit}/>
          <Numbers digit='3' click={this.clickDigit}/>
        </div>
        <div>
          <Numbers digit='0' click={this.clickDigit}/>
          <Specials special={specialEnum.clear} click={this.clearCalculator}/>
        </div>
        <div>
          <Operators op={opEnum.add} click={this.clickOp}/>
          <Operators op={opEnum.sub} click={this.clickOp}/>
          <Operators op={opEnum.mul} click={this.clickOp}/>
          <Operators op={opEnum.div} click={this.clickOp}/>
          <Operators op={opEnum.eq} click={this.clickOp}/>
          
        </div>

      </div>
    )
  }
}

export default App

const opEnum = {
  add: 0,
  sub: 1,
  mul: 2,
  div: 3,
  eq: 4,
}

const specialEnum = {
  clear: 0,
}

const containerStyle = {
  width: '400px',
  
}
