import Result from '../Result.js';
import Screen from '../Screen.js';
import MathButton from '../MathButton.js';
import {Memory, SaveMemory} from '../Memory.js'
import {mathButtonClick, memoryClick, saveMemoryClick, handleInput} from './CalculatorEventLogic.js'
import React from 'react';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entriesString: "",
            memories: ['2+2','4-9'],
        };
    }

    renderButton(val) {
        return (
            <MathButton
                value={val}
                //mathButtonClick() needs to be passed anonymously or else it will trigger when MathButton is rendered
                onClick={() => mathButtonClick(val)}
            />
        );
    }

    renderScreen(entriesString) {
        return (
            <Screen
                data-testid = "screen"
                entriesString = {entriesString}
                onChange = {(e) => handleInput(e)}
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

    renderMemory(memory) {
        return(
            <Memory
                memory = {memory}
                onClick = {() => memoryClick(memory)}
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
            {memories.map((mem) => this.renderMemory(mem))}
            {<SaveMemory onClick={() => saveMemoryClick(entriesString)}/>}
        </div>)
    }
}



