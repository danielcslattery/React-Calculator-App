import Result from '../Result/Result.js';
import Screen from '../Screen.js';
import MathButton from '../MathButton.js';
import {Memory, SaveMemory} from '../Memory.js'
import React from 'react';

import * as CalculatorHelper from './CalculatorHelper.js';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entriesString: "",
            memories: ['2+2','5-9'],
        };
        this.mathButtonClick = CalculatorHelper.mathButtonClick.bind(this);
        this.memoryClick = CalculatorHelper.memoryClick.bind(this);
        this.saveMemoryClick = CalculatorHelper.saveMemoryClick.bind(this);
        this.handleInput = CalculatorHelper.handleInput.bind(this);
    }

    renderButton(val) {
        return (
            <MathButton
                value={val}
                //mathButtonClick() needs to be passed anonymously or else it will trigger when MathButton is rendered
                onClick={() => this.mathButtonClick(val)}
            />
        );
    }

    renderScreen(entriesString) {
        return (
            <Screen
                data-testid = "screen"
                entriesString = {entriesString}
                onChange = {(e) => this.handleInput(e)}
            />
        )   
    }

    renderResult(entriesString) {
        return (
            <Result
                data-testid = "result"
                entriesString = {entriesString}
            />
        )
    }

    renderMemory(memory, entriesString) {
        return(
            <Memory
                memory = {memory}
                entriesString = {entriesString}
                onClick = {() => this.memoryClick(memory)}
            />
        )
    }

    render() {
        const entriesString = this.state.entriesString;
        const memories = this.state.memories;

        return (
        <div className = "calculator">
            {this.renderScreen(entriesString)}
            {[...Array(10).keys()].map((num) => this.renderButton(num))}
            {['+','-','*','/'].map((operator) => this.renderButton(operator))}
            {this.renderResult(entriesString)}
            {memories.map((mem) => this.renderMemory(mem, entriesString))}
            {<SaveMemory entriesString = {this.state.entriesString} memories = {memories} onClick={() => this.saveMemoryClick(entriesString)}/>}
        </div>)
    }
}



