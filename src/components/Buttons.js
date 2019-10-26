import React, { Component } from 'react'
import {opSymbols, specialSymbols, specialEnum, opEnum } from './const'
import  './components.css'

export class Buttons extends Component {
    renderOp(op) {
        let className = 'btn btn-small'
        if (op === this.props.lastOp) {
            className += ' btn-operator-clicked'
        } else {
            className += ' btn-operator'
        }
        return (
            <button className={className} onClick={this.props.clickOp} op={op}> {opSymbols[op]} </button>
        )
    }
    renderNum(digit) {
        let className = 'btn btn-number'
        className += (digit === 0) ? ' btn-wide' : ' btn-small'

        return (
            <button className={className} onClick={this.props.clickDigit} digit={this.digit}> {digit} </button>
        )
    }

    renderSpecial(special) {
        let className = 'btn btn-special btn-small'

        return (
            <button className={className} onClick={this.props.clickSpecial} special={special}> {specialSymbols[special]} </button>

        )
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderSpecial(specialEnum.clear)}
                    {this.renderSpecial(specialEnum.flipSign)}
                    {this.renderSpecial(specialEnum.percent)}
                    {this.renderOp(opEnum.div)}
                </div>
                <div>
                    {this.renderNum(7)}
                    {this.renderNum(8)}
                    {this.renderNum(9)}
                    {this.renderOp(opEnum.mul)}
                </div>
                <div>
                    {this.renderNum(4)}
                    {this.renderNum(5)}
                    {this.renderNum(6)}
                    {this.renderOp(opEnum.sub)}
                </div>
                <div>
                    {this.renderNum(7)}
                    {this.renderNum(8)}
                    {this.renderNum(9)}
                    {this.renderOp(opEnum.add)}
                </div>
                <div>
                    {this.renderNum(0)}
                    {this.renderSpecial(specialEnum.decimal)}
                    {this.renderOp(opEnum.eq)}
                </div>
            </div>
        )
    }
}

export default Buttons

