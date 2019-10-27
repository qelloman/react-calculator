import React from 'react'
import {connect} from 'react-redux'
import { Buttons } from '../components/Buttons.js'
import { Display } from '../components/Display.js'

import '../css/App.css'
import { specialEnum } from '../const.js'

import { clickDigit, clickOp, clickSpecial, clickClear} from '../actions/buttonActions'

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div>
          <Display displayText={this.props.button.displayText}/>
        </div>
        <div>
          <Buttons button={specialEnum.clear} displayText={this.props.button.displayText} click={() => this.props.clickClear()}/>
          <Buttons button={specialEnum.signFlip} click={() => this.props.clickSpecial(specialEnum.signFlip)}/>
          <Buttons button={specialEnum.percent} click={() => this.props.clickSpecial(specialEnum.percent)}/>
          <Buttons button={specialEnum.div} lastButton={this.props.button.lastButton} click={() => this.props.clickOp(specialEnum.div)}/>
        </div>
        <div>
          <Buttons button={7} click={() => this.props.clickDigit(7)}/>
          <Buttons button={8} click={() => this.props.clickDigit(8)}/>
          <Buttons button={9} click={() => this.props.clickDigit(9)}/>
          <Buttons button={specialEnum.mul} lastButton={this.props.button.lastButton} click={() => this.props.clickOp(specialEnum.mul)}/>
        </div>
        <div>
          <Buttons button={4} click={() => this.props.clickDigit(4)}/>
          <Buttons button={5} click={() => this.props.clickDigit(5)}/>
          <Buttons button={6} click={() => this.props.clickDigit(6)}/>
          <Buttons button={specialEnum.sub} lastButton={this.props.button.lastButton} click={() => this.props.clickOp(specialEnum.sub)}/>
        </div>
        <div>
          <Buttons button={1} click={() => this.props.clickDigit(1)}/>
          <Buttons button={2} click={() => this.props.clickDigit(2)}/>
          <Buttons button={3} click={() => this.props.clickDigit(3)}/>
          <Buttons button={specialEnum.add} lastButton={this.props.button.lastButton} click={() => this.props.clickOp(specialEnum.add)}/>
        </div>
        <div>
          <Buttons button={0} click={() => this.props.clickDigit(0)}/>
          <Buttons button={specialEnum.dot} click={() => this.props.clickDigit(specialEnum.dot)}/>
          <Buttons button={specialEnum.equal} lastButton={this.props.button.lastButton} click={() => this.props.clickOp(specialEnum.equal)}/>
        </div>
        

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      button: state.button,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      clickDigit: (digit) => {
        dispatch(clickDigit(digit))
      },
      clickOp: (op) => {
        dispatch(clickOp(op))
      },
      clickSpecial: (op) => {
        dispatch(clickSpecial(op))
      },
      clickClear: () => {
        dispatch(clickClear())
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)