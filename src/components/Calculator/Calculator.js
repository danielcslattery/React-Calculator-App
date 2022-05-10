import Result from '../Result/Result.js';
import Screen from '../Screen.js';
import MathButton from '../MathButton.js';
import {Memory, SaveMemory} from '../Memory.js'
import React from 'react';
import { useState } from 'react';

import * as CalculatorHelper from './CalculatorHelper.js';

export default function Calculator() {
    const [entriesString, setEntriesString] = useState("");
    const [memories, setMemories] = useState(['2+2','5-9'])

    return (
        <div className = "calculator">
            {renderScreen(entriesString, setEntriesString)}
            {[...Array(10).keys()].map((num) => renderButton(num, entriesString, setEntriesString))}
            {['+','-','*','/'].map((operator) => renderButton(operator, entriesString, setEntriesString))}
            {renderResult(entriesString)}
            {memories.map((mem) => renderMemory(mem, entriesString, setEntriesString))}
            {<SaveMemory 
                entriesString = {entriesString} 
                memories = {memories} 
                onClick={
                    () => CalculatorHelper.saveMemoryClick(entriesString, memories, setMemories)
                }
            />}
        </div>
        )
}


function renderButton(val, entriesString, setEntriesString) {
    return (
        <MathButton
            value={val}
            //mathButtonClick() needs to be passed anonymously or else it will trigger when MathButton is rendered
            onClick={() => CalculatorHelper.mathButtonClick(val, entriesString, setEntriesString)}
        />
    );
}

function renderScreen(entriesString, setEntriesString) {
    return (
        <Screen
            data-testid = "screen"
            entriesString = {entriesString}
            onChange = {(e) => CalculatorHelper.handleInput(e, setEntriesString)}
        />
    )   
}

function renderResult(entriesString) {
    return (
        <Result
            data-testid = "result"
            entriesString = {entriesString}
        />
    )
}

function renderMemory(memory, entriesString, setEntriesString) {
    return(
        <Memory
            memory = {memory}
            entriesString = {entriesString}
            onClick = {() => CalculatorHelper.memoryClick(memory, setEntriesString)}
        />
    )
}

